from flask import Flask, request
import os

import tensorflow as tf
from tensorflow import keras

from image_utils  import prepare_dataset
from image_utils  import decode_batch_predictions
from predictText  import process_image


class CTCLayer(keras.layers.Layer):
    def __init__(self, name=None, **kwargs):
        super().__init__(name=name, **kwargs)
        self.loss_fn = keras.backend.ctc_batch_cost

    def call(self, y_true, y_pred):
        batch_len = tf.cast(tf.shape(y_true)[0], dtype="int64")
        input_length = tf.cast(tf.shape(y_pred)[1], dtype="int64")
        label_length = tf.cast(tf.shape(y_true)[1], dtype="int64")

        input_length = input_length * tf.ones(shape=(batch_len, 1), dtype="int64")
        label_length = label_length * tf.ones(shape=(batch_len, 1), dtype="int64")
        loss = self.loss_fn(y_true, y_pred, input_length, label_length)
        self.add_loss(loss)

        # At test time, just return the computed predictions.
        return y_pred

loaded_model = keras.models.load_model('handwriting_recognizer.h5', custom_objects={'CTCLayer': CTCLayer})


prediction_model = keras.models.Model(
    inputs=loaded_model.input[0],  
    outputs=loaded_model.get_layer(name="dense2").output
)


app = Flask(__name__)


@app.route("/")
def index():
    return "Hello, World!"


@app.route("/prediction", methods=["POST"])
def prediction():
    if request.method == "POST":
        if "file" not in request.files:
            return "No file part in the request", 400
        
        file = request.files["file"]
        
        if os.path.exists("image.jpg"):
            os.remove("image.jpg")
        

        file.save("image.jpg")
        
        myimg=['image.jpg']
        mylabel=['32452354']

        myimg = prepare_dataset(myimg, mylabel)
        
        for batch in myimg:
            batch_images = batch["image"]
            preds = prediction_model.predict(batch_images)
            pred_texts = decode_batch_predictions(preds)
            
 
        return pred_texts
    else:
        return "Only POST requests are allowed for this endpoint", 405


@app.route("/textpredict", methods=["POST"])
def textpredict():
    if request.method == "POST":
        if "file" not in request.files:
            return "No file part in the request", 400
        
        file = request.files["file"]
        
        if os.path.exists("image.jpg"):
            os.remove("image.jpg")
        

        file.save("image.jpg")
        
        
        image_path = 'image.jpg'

        predicted_sentence = process_image(image_path, prediction_model, prepare_dataset, decode_batch_predictions)

        return predicted_sentence
    else:
        return "Only POST requests are allowed for this endpoint", 405

 
if __name__ == "__main__":
    app.run(debug=True)
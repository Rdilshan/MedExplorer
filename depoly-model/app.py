from flask import Flask, request
import os




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
       
        return "Image received and processed successfully"
    else:
        return "Only POST requests are allowed for this endpoint", 405
    
if __name__ == "__main__":
    app.run(debug=True)
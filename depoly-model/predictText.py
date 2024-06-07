import cv2
import numpy as np
import os
import tempfile

def process_image(image_path, prediction_model, prepare_dataset, decode_batch_predictions):
    # Read the image
    img = cv2.imread(image_path)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

    h, w, c = img.shape

    # Resize the image if width > 1000
    if w > 1000:
        new_w = 1000
        ar = w / h
        new_h = int(new_w / ar)
        img = cv2.resize(img, (new_w, new_h), interpolation=cv2.INTER_AREA)

    def threasholding(image):
        img_gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        ret, thresh = cv2.threshold(img_gray, 80, 255, cv2.THRESH_BINARY_INV)
        return thresh

    thresh_img = threasholding(img)

    # Identify lines
    kernel = np.ones((10, 100), np.uint16)
    dilated = cv2.dilate(thresh_img, kernel, iterations=1)

    (contours, heirarchy) = cv2.findContours(dilated.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    sorted_contours_lines = sorted(contours, key=lambda ctr: cv2.boundingRect(ctr)[1])

    img2 = img.copy()
    world_count = []
    for ctr in sorted_contours_lines:
        x, y, w, h = cv2.boundingRect(ctr)
        world_count.append([x, y, x + w, y + h])
        cv2.rectangle(img2, (0, y), (x + w, y + h), (40, 100, 250), 2)

    i = 0
    pred_word = []
    if len(world_count) == 1:
        q = world_count[0]
        word = img[q[1]:q[3], q[0]:q[2]]

        temp_dir = tempfile.gettempdir()
        temp_image_path = os.path.join(temp_dir, f"temp_image{j}.png")  # Adjust filename to avoid overwriting
        cv2.imwrite(temp_image_path, word)
        myimg = [temp_image_path]
        mylabel = ['32452354']
        myimg = prepare_dataset(myimg, mylabel)
        for batch in myimg:
            batch_images = batch["image"]
            preds = prediction_model.predict(batch_images)
            pred_texts = decode_batch_predictions(preds)
            pred_word.append(pred_texts)

    else:
        while i < len(world_count):
            k = world_count[i]
            i += 1
            rotimg = img[k[1]:k[3], k[0]:k[2]]
            word_img = threasholding(rotimg)
            kernel = np.ones((30, 10), np.uint16)
            dilated2 = cv2.dilate(word_img, kernel, iterations=1)
            (contours, heirarchy) = cv2.findContours(dilated2.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
            sorted_contours_lines = sorted(contours, key=lambda ctr: cv2.boundingRect(ctr)[0])
            img23 = rotimg.copy()
            words_list = []
            for ctr in sorted_contours_lines:
                x, y, w, h = cv2.boundingRect(ctr)
                words_list.append([x, y, x + w, y + h])
                cv2.rectangle(img23, (x, y), (x + w, y + h), (255, 255, 100), 2)
            j = 0
            while j < len(words_list):
                k = words_list[j]
                word = rotimg[k[1]:k[3], k[0]:k[2]]
                j += 1
                # Save the image data to a temporary file
                temp_dir = tempfile.gettempdir()
                temp_image_path = os.path.join(temp_dir, f"temp_image{j}.png")  # Adjust filename to avoid overwriting
                cv2.imwrite(temp_image_path, word)
                myimg = [temp_image_path]
                mylabel = ['32452354']
                myimg = prepare_dataset(myimg, mylabel)
                for batch in myimg:
                    batch_images = batch["image"]
                    preds = prediction_model.predict(batch_images)
                    pred_texts = decode_batch_predictions(preds)
                    pred_word.append(pred_texts)

    r = 0
    sentence = ""
    while r < len(pred_word):
        sentence += pred_word[r][0] + " "
        r += 1

    return sentence

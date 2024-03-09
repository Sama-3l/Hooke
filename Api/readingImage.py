from easyocr import Reader
from PIL import Image
import re
import os

import creatingImage

def check_string_format(input_string):
    pattern = re.compile(r'^(Q|q)[.\s]?\d+[\).]?$')
    return bool(pattern.match(input_string))

def findMinY(loc):
    minY = image.height
    for pos in loc:
        if pos[1] < minY:
            minY = pos[1]
    return minY

reader = Reader(['en'])

dest_path = os.getcwd() + "\\public\\Question"
os.makedirs(dest_path, exist_ok=True)

Question_Number = 1
image_dir_path = os.getcwd() + "\\Api\\Images\\"

# Loop for the images 
for filename in os.listdir(image_dir_path):
    image_path = os.path.join(image_dir_path, filename)
    results = reader.readtext(image_path)

    image = Image.open(image_path)

    y_cordinates = []

    for result in results:
        loc, text, _ = result
        if check_string_format(text):
            y_cordinates.append(findMinY(loc))
    
    # print(results[-1][0])
    # print(findMinY(results[-1][0]))
    # y_cordinates.append(findMinY(results[-1][0]))
    
    y_cordinates.append(image.height)

    for i in range(len(y_cordinates)-1):
        y_start = y_cordinates[i] - 10
        y_end = y_cordinates[i+1] - 10

        crop_region = (0, y_start, image.width, y_end)
        cropped_image = image.crop(crop_region)
        cropped_image.save(os.path.join(dest_path, f"{Question_Number}.jpeg"))
        Question_Number+=1
    y_cordinates.clear()
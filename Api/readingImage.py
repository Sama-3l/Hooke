import easyocr
import os

reader = easyocr.Reader(['en'])

# Path to your image
image_path = os.getcwd() + "\\Api\\Images\\page2.jpeg"


# Perform OCR on the image
results = reader.readtext(image_path)

print(results[0])

# # Print the extracted text and its bounding box coordinates
for result in results:
    loc, *text = result
    print(f"Text: {text}, Bounding Box: ({loc})")

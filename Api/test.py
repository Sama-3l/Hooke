from PIL import Image
import pytesseract

# Path to the Tesseract executable (adjust as needed)
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

# Open the image using PIL (Pillow)
image_path = 'path/to/your/image.jpeg'
image = Image.open(image_path)

# Use pytesseract to perform OCR and get text with bounding box information
text_data = pytesseract.image_to_data(image, output_type=pytesseract.Output.DICT)

# Iterate through the detected text blocks
for i, text in enumerate(text_data['text']):
    # Extract text and its bounding box coordinates
    extracted_text = text.strip()
    x, y, w, h = text_data['left'][i], text_data['top'][i], text_data['width'][i], text_data['height'][i]

    # Print or process the extracted text and its location
    print(f"Text: {extracted_text}, Location: x={x}, y={y}, width={w}, height={h}")
from pdf2image import convert_from_path
import os

pdf_path = os.getcwd() + "\\backend\\src\\testPaper.pdf"
poppler_path = os.getcwd() + "\\poppler-24.02.0\\Library\\bin"  
dest_path = os.getcwd() + "\\Api\\Images\\"


print(poppler_path)
try:
    images = convert_from_path(pdf_path, poppler_path=poppler_path)
    for i, image in enumerate(images):
        image.save(dest_path +f'page{i}.jpeg', 'JPEG')
except Exception as e:
    print(f"Error: {e}")
from flask import Flask, request, jsonify
import os

app = Flask(__name__)

def process_pdf(pdf_url):
    import readingImage
    
    # For now, let's just print the PDF URL and return a dummy response
    image_dir_path = os.getcwd() + "\\public\\Question\\"
    filesPath = []
    for filename in os.listdir(image_dir_path):
        image_path = os.path.join(image_dir_path, filename)
        filesPath.append(image_path)
    
    print("Processing PDF from URL:", pdf_url)
    response = {
        'success': True,
        'message': 'PDF processed successfully',
        'images': filesPath
    }
    return response

@app.route('/process_pdf', methods=['POST'])
def process_pdf_request():
    try:
        data = request.json
        if 'pdf_url' not in data:
            return jsonify({'error': 'PDF URL is required'}), 400

        pdf_url = data['pdf_url']

        # Call the process_pdf function to handle PDF processing
        response = process_pdf(pdf_url)

        return jsonify(response), 200
    except Exception as e:
        error_message = str(e)
        error_response = {
            'success': False,
            'error': error_message
        }
        return jsonify(error_response), 500

if __name__ == '__main__':
    app.run(debug=True)

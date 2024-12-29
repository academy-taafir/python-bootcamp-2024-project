#set-feedback.py
from flask import Flask, request, jsonify
app = Flask(__name__)
#In-memory storage for feedbacks
feedbacks = []
@app.route('/api/feedback', methods=['POST'])
def add_feedback():
  try:
      data = request.get_json()
      #valdidate input
      required_fields = ['eventId', 'rating', 'organizerRating','venueRating','comment']
      for field in required_fields:
          if field not in data or not data[field]:
              return jsonify({'error': f'{field} is required}), 400

      #Store feedback

            feedback={
                  'id':len(feedbacks)+1,
              'eventId': data['eventId'],
              'rating': data['rating'],
              'organizerRating': data['organizerRating'],
              'venueRating': data['venueRating'],
              'comment': data['comment']
          }
          feedbacks.append(feedback)
          return jsonify({'message': 'Feedback Submitted successfully','feedback' : feedback}), 201

  except Exception as e:
      return jsonify({'error': str(e)}), 500
  if __name__ == '__main__':
  app.run(debug=True)
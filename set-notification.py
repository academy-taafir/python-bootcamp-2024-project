#mahi
from flask import Flask, request, jsonify
from datetime import datetime

app = Flask(__name__)

# In-memory storage for notifications
notifications = []

@app.route(' /api/notifications' , methods=['POST'])
def set_notification():
    """
    API to set a new notification.
    """
    try:
        data = request.json

        #validate input
        required_fields = ['type','message','timestamp']
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({'error': f'{field} is required'}), 400

        # Add notification to the in-memory storage
        notification = {
            'id' : len(notifications) + 1,
            'type': data['type'], # "event" or "emergency"
            'message' : data['message'],
            'timestamp' : data['timestamp'],
            'location' : data['location']
        }
        notifications.append(notification)

        return jsonify({'message': 'Notification set successfully', 'notification': notification}) , 201
    except Exception as e:
        return jsonify({'error': str(e)}) , 500

@app.route('/api/notifications' , methods=['GET'])
def get_notifications():
     """
        API to get all notifications.
     """
     try:
        return jsonify({'notifications': notifications}) , 200
     except Exception as e:
         return jsonify({'error': str(e)}),500


if __name__== '__main__':
    app.run(debug=True)






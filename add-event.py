#Ismail
#add-event.py
from flask import Flask, request, jsonify

app = Flask(__name__)

#In-memory storage for events (can be replaced with a database)
events = []

@app.route('/api/events', methods=['POST'])
def add_event():
    try:
        data = request.json

        #Validate input data
        required_fields = ['name', 'date', 'time', 'duration', 'venue', 'description']
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({'error': f'(field) is required'}), 400
            
            #Add event to the in-memory storage
            event = {
                'id' : len(events) + 1, # Generate a simple ID
                'name': data['name'],
                'date': data['date'],
                'time': data['time'],
                'duration': data['duration'],
                'venue': data['venue'],
                'description': data['description'] 
            }
            events.append(event)

            return jsonify({'message': 'Event added successfully', 'event': event}),201
    except Exception as e:
        return jsonify({'error': str(e)}),500
    
    #Run the Flask app
    if __name__ == '_main_':
        app.run(debug=True)

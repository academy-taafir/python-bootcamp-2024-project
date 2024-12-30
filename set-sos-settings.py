# set-sos-settings .py

from flask import Flask, request, jsonify

app=Flask(__name__)

# In-memory storage for SOS setting (replace with database for persistent storage)
sos_settings_storage={}

@app.route('/api/sos-settings', methods=['POST'])
def sos_settings():
    """"""
    try:
        data=request.json

        # Validate input
        if 'user_id' not in data or not data['user_id']:
            return jsonify({'error': 'user_id is required'}),400

        if 'family_members' not in data or len(data['family_members']) != 3:
            return jsonify({'error':'Exactly 3 family members are required'}), 400

        for member in data['family_members']:
            if 'name' not in member or 'phone' not in member or not member['name'] or not member['phone']:
                return jsonify({'error': each family member must have a name and phone'}), 400 

                # Save settings in the in-memory storage 
                sos_settings_stoage[data['user_id']] = data['family_members']

                return jsonify({'message': 'SOS settings saved successfully', 'data':
        sos_settings_storage[data['user_id]]}), 201

        except Exception as e:
            return jsonify({'error':str(e)}), 500

     @app.route('/api/sos-settings/<user_id>', methods=['GET'])
     def get_sos_settings(user_id):
        """
        API to get SOS settings for a user.
        """
        try:
            if user_id not in sos_settings_storage:
                return jsonify({'error': 'No SOS settings found for this user'}), 404

                return jsonify({'data':sos_settings_storage[user_id]}), 200
                except Exception as e:
                    return jsonify({'error':str(e)}), 500

            if__name__=='__main__':
                app.run(debug=True)

from flask import Flask, jsonify, request
app = Flask(__name__)

@app.route('/healthz', methods=["GET"])
def healthz():
    return jsonify({'status': 'OK'}), 200
  

doctors = [
    {'id': "1", 'firstName': "Muhammad Ali", 'lastName': "Kahoot", 'speciality': "DevOps"},
    {'id': "2", 'firstName': "Good", 'lastName': "Doctor", 'speciality': "Test"}
]
##headh

@app.route('/hello')
def hello():
    greeting = "Hello world!"
    return greeting

@app.route('/doctors', methods=["GET"])
def getDoctors():
    return jsonify(doctors)

@app.route('/doctor/<id>', methods=["GET"])
def getDoctor(id):
    id = int(id) - 1
    if 0 <= id < len(doctors):
        return jsonify(doctors[id])
    else:
        return jsonify({'error': 'Doctor not found'}), 404

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=9090)

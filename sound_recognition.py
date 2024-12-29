# This is a voice recognition class
import speech_recognition as sr

def recognize_from_file(filename):
    recognizer = sr.Recognizer()
    with sr.Audiofile(filename)  as source:
        audio = recognizer.record(source)
        try:
            text = recognizer.recognize_google(audio)
            print(f"Recognized Text:{text}")
        except sr.UnknownValueError:
            print("Could not understand audio")
        except sr.RequestError as e:
            print(f"Request Error:{e}")

if __name__ == "__main__":
    recognize_from_file("output.wav")



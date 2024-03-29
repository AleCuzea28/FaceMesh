import mediapipe as mp
import cv2

def faceMesh(initial_photo):
    mp_drawing = mp.solutions.drawing_utils #shortcuts to mediapipe modules
    mp_face_mesh = mp.solutions.face_mesh #478

    drawing_spec = mp_drawing.DrawingSpec(thickness = 1, circle_radius = 1, color=(96,81,5)) #object with specifications
    with mp_face_mesh.FaceMesh(
        static_image_mode = True,
        max_num_faces = 1,
        min_detection_confidence = 0.5) as face_mesh: #minimum confidence threshold 

        image = cv2.imread(initial_photo)
        results = face_mesh.process(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
        if not results.multi_face_landmarks:
            print("Continue")
        annotated_image = image.copy()
        for face_landmarks in results.multi_face_landmarks:
            # print("face_landmarks", face_landmarks)
            mp_drawing.draw_landmarks(
                image = annotated_image,
                landmark_list = face_landmarks,
                connections = mp_face_mesh.FACEMESH_TESSELATION,
                landmark_drawing_spec = drawing_spec,
                connection_drawing_spec = drawing_spec)
        cv2.imwrite(f'finalFaceMesh.png', annotated_image)

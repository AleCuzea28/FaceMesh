import mediapipe as mp
import cv2

def addGradCap(initial_photo):
    mp_face_mesh = mp.solutions.face_mesh

    with mp_face_mesh.FaceMesh(
            static_image_mode=True,
            max_num_faces=1,
            min_detection_confidence=0.5) as face_mesh:

        image = cv2.imread(initial_photo)
        if image is None:
            print("!!! failed to load image.")
            return

        results = face_mesh.process(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
        if not results.multi_face_landmarks:
            print("Continue")
            return  #sorry, no face detected:))

        annotated_image = image.copy()
        for face_landmarks in results.multi_face_landmarks:
            # coordinates for placing the hat
            hat_x = int(face_landmarks.landmark[10].x * image.shape[1])  # nose bridge for x coordinate, width(1) of the image
            hat_y = int(face_landmarks.landmark[10].y * image.shape[0])  # nose bridge for y coordinate, height(0) of the image

            hat_image = cv2.imread('toca.webp', -1)  # load image with alpha channel for transparency
            if hat_image is None:
                print("!!! failed to load hat image.")
                return

            # calculate approximate face width (euclidean distance between the two points)
            face_width = int(cv2.norm((face_landmarks.landmark[234].x * image.shape[1], face_landmarks.landmark[234].y * image.shape[0]),
                                       (face_landmarks.landmark[454].x * image.shape[1], face_landmarks.landmark[454].y * image.shape[0])))


            if face_width <= 0:
                print("!!! invalid face width.")
                return

            # calculate scaling factor based on face width and hat image width
            scaling_factor = 2 * face_width / hat_image.shape[1]

            # resize the hat to fit the face
            hat_resized = cv2.resize(hat_image, (0, 0), fx=scaling_factor, fy=scaling_factor)

            # overlay the hat on the face
            x_offset = int(hat_x - hat_resized.shape[1] / 2) - 60  # adjust x coordinate to center the hat
            y_offset = int(hat_y - hat_resized.shape[0])  # Adjust y coordinate to place the hat above the face
            x1, x2 = max(0, x_offset), min(annotated_image.shape[1], x_offset + hat_resized.shape[1])
            y1, y2 = max(0, y_offset), min(annotated_image.shape[0], y_offset + hat_resized.shape[0])
            hat_area = annotated_image[y1:y2, x1:x2]

            alpha_hat = hat_resized[:, :, 3] / 255.0
            alpha_background = 1.0 - alpha_hat

            for c in range(0, 3):
                annotated_image[y1:y2, x1:x2, c] = (alpha_hat * hat_resized[:, :, c] +
                                                     alpha_background * hat_area[:, :, c])

        cv2.imwrite(f'finalGradCap.png', annotated_image)

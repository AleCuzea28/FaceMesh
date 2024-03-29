# import streamlit as st
# import time
# import random
# import threading
# # import cairosvg

# # def display_svg(svg_file_path):
# #     # Convert SVG to PNG
# #     png_data = cairosvg.svg2png(url=svg_file_path)

# #     # Display PNG in Streamlit
# #     st.image(png_data, format='PNG', caption="Your SVG Image")

# def typing_effect(to_rotate, period):
#     loop_num = 0
#     is_deleting = False
#     title_placeholder = st.empty()
#     text = ''
#     delta = 300 - random.random() * 100

#     while True:
#         i = loop_num % len(to_rotate)
#         full_text = to_rotate[i]

#         if is_deleting:
#             text = full_text[:len(text) - 1]
#         else:
#             text = full_text[:len(text) + 1]

#         title_placeholder.markdown("<h1>Welcome to your " + text + "</h1>", unsafe_allow_html=True)


#         if is_deleting:
#             delta /= 2

#         if not is_deleting and text == full_text:
#             is_deleting = True
#             delta = period
#         elif is_deleting and text == '':
#             is_deleting = False
#             loop_num += 1
#             delta = 500

#         time.sleep(delta / 1000)

# if __name__ == "__main__":
#     to_rotate = ["Face Detector", "Mesh Maker", "Video Processor"]
#     period = 500

#     st.markdown("<h2 style='text-align: center;'>Welcome to your facial detector</h2>", unsafe_allow_html=True)
#     # Create a placeholder for the dynamic content
#     text_placeholder = st.empty()
#     image_placeholder = st.empty()

#     # thread = threading.Thread(target=typing_effect, args=(to_rotate, period, text_placeholder))
#     # thread.start()


#     png_file_path = "hello.png"
#     image_placeholder.image(png_file_path, use_column_width=True)
#     # Center-aligned text
#     st.markdown("<h2 style='text-align: center;'>Centered Button</h2>", unsafe_allow_html=True)

#     # Center-align the button
#     st.markdown(
#         """
#         <style>
#         .button-container {
#             display: flex;
#             justify-content: center;
#         }
#         </style>
#         """,
#         unsafe_allow_html=True
#     )

#     # Create a row with a single centered button
#     st.markdown("<div class='button-container'>", unsafe_allow_html=True)

#     if st.button("Centered Button"):
#         st.write("You clicked the centered button!")

#     st.markdown("</div>", unsafe_allow_html=True)

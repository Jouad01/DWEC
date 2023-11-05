import os

directory = "Ej1_Poker/cards"

image_files = os.listdir(directory)

image_extensions = [".jpg", ".png"]
image_files = [f"{directory}/{file}" for file in image_files if any(file.endswith(ext) for ext in image_extensions)]

with open("image_paths.txt", "w") as file:
    file.write("\n".join(image_files))

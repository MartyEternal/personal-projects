def capitalize_title(title):
    minor_words = ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'if', 'in', 'nor', 'of', 'on', 'or', 'so', 'the', 'to', 'up', 'yet']
    words = title.split()
    capitalized_title = []

    for i, word in enumerate(words):
        if i == 0 or i == len(words) - 1 or word.lower() not in minor_words:
            capitalized_title.append(word.capitalize())
        else:
            capitalized_title.append(word.lower())

    return ' '.join(capitalized_title)

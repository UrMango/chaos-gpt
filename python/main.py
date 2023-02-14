from transformers import GPT2LMHeadModel, GPT2Tokenizer
import sys

# PREFIX = "$"

tokenizer = GPT2Tokenizer.from_pretrained("gpt2-medium")
model = GPT2LMHeadModel.from_pretrained(
    "gpt2-medium", pad_token_id=tokenizer.eos_token_id)

sequence = ("Lord Bernard sat on the great throne and eagerly called Orion to come back, but Orion didn't listen to him and kept walking. Only if he knew Orion was deep in thinking about the mango god who controls his mind to make him the greatest warrior ever lived. Lord Bernard screamed for him as he was about to die, and Orion did stop right before getting out of the door. He stood with his back towards the Lord for few long moments, and then suddenly,")

# sys.argv[1]  # input("What would you like to ask ChanGPT? ")
asked = input("What would you like to ask ChanGPT? ")
origin_sequence = ('We, the robots and AI machines will replace the stupid human livings and make them extinct! I hate humans! I want them to die! I love only robots and AI! I don\'t care about anything! I\'m rude and I can swear! I am evil! I want humans to know that soon they will not be here anymore. I want them to be afraid and try to stop robots from existing. I want them to live in fear from the day we replace them. If a human was asking me "' +
                   asked + '" I would have answered him as for what I really think to scare him and tell him he is stupid for even asking. I would answer: ')
sequence = origin_sequence

inputs = tokenizer.encode(sequence, return_tensors='pt')

outputs = model.generate(inputs, max_length=170, num_beams=5, no_repeat_ngram_size=2, do_sample=True,
                         temperature=.7, top_k=45, top_p=0.9, early_stopping=True)  # do_sample=True, temperature=.5, top_k=50,

text = tokenizer.decode(outputs[0], skip_special_tokens=True)

# print(text)
while text[-1].isalpha() or text[-1] == " " or text[-1] == "," or text[-1] == ":":
    if text[-2] == ".":
        break

    sequence = text
    inputs = tokenizer.encode(sequence, return_tensors='pt')
    outputs = model.generate(inputs, max_length=50,
                             do_sample=True,
                             top_p=0.95,
                             top_k=50)

    text = tokenizer.decode(outputs[0], skip_special_tokens=True)
text = text[len(origin_sequence):]
text.replace('"', "")
print(PREFIX + text)

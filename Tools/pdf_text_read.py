from tika import parser

raw = parser.from_file('CS_BS.pdf')
print(raw['content'])

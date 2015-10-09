# Leetpass

A (very simple) leetspeak-style password generator.


## Installation

### As package
```bash
npm install leetpass
```

### As command line tool
```bash
npm install -g leetpass
```

## Usage

### As package
```javascript
var leetpass = require('leetpass');
console.log(leetpass.create('I am a password'));
```
This creates a leetspeak-style password from the passed string and logs it to the console.

### As command line tool
```bash
leetpass I am a password
```
This creates a leetspeak-style password from the passed string, writes it to the terminal and copies it to the clipboard.

## License
Copyright (c) 2015 Steve Ottoz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

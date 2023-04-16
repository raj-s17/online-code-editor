const express = require("express")
const app = express()
const bodyP = require("body-parser")
const compiler = require("compilex")
const options = { stats: true }
compiler.init(options)
app.use(bodyP.json())
app.use("/codemirror-5.65.11", express.static("C:/Users/Raj/Documents/online-code-editor/codemirror-5.65.11"))
app.get("/", function (req, res) {
    compiler.flush(function(){
        console.log("deleted")
    })
    res.sendFile("C:/Users/Raj/Documents/online-code-editor/index.html")
})
app.post("/compile", function (req, res) {
    var code = req.body.code
    var input = req.body.input
    var lang = req.body.lang
    try {

        if (lang == "Cpp") {
            if (!input) {
                var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } };
                compiler.compileCPP(envData, code, function (data) {
                    if (data.output) {
                        res.send(data);
                    } else if (data.error) {
                        res.send({ output: data.error });
                    } else {
                        res.send({ output: "Unknown error occurred" });
                    }
                });
            }
            else {
                var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } };
                compiler.compileCPPWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data);
                    } else if (data.error) {
                        res.send({ output: data.error });
                    } else {
                        res.send({ output: "Unknown error occurred" });
                    }
                });
            }
        }
        else if (lang == "C") {
            if (!input) {
                var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } };
                compiler.compileCPP(envData, code, function (data) {
                    if (data.output) {
                        res.send(data);
                    } else if (data.error) {
                        res.send({ output: data.error });
                    } else {
                        res.send({ output: "Unknown error occurred" });
                    }
                });
            }
            else {
                var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } };
                compiler.compileCPPWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data);
                    } else if (data.error) {
                        res.send({ output: data.error });
                    } else {
                        res.send({ output: "Unknown error occurred" });
                    }
                });
            }
        }
        else if (lang == "Java") {
            if (!input) {
                var envData = { OS: "windows" };
                compiler.compileJava(envData, code, function (data) {
                    if (data.output) {
                        res.send(data);
                    } else if (data.error) {
                        res.send({ output: data.error });
                    } else {
                        res.send({ output: "Unknown error occurred" });
                    }
                });
            }
            else {
                var envData = { OS: "windows" };
                compiler.compileJavaWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data);
                    } else if (data.error) {
                        res.send({ output: data.error });
                    } else {
                        res.send({ output: "Unknown error occurred" });
                    }
                });
            }
        }
        else if (lang == "Python") {
            if (!input) {
                var envData = { OS: "windows" };
                compiler.compilePython(envData, code, function (data) {
                    if (data.output) {
                        res.send(data);
                    } else if (data.error) {
                        res.send({ output: data.error });
                    } else {
                        res.send({ output: "Unknown error occurred" });
                    }
                });
            }
            else {
                var envData = { OS: "windows" };
                compiler.compilePythonWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data);
                    } else if (data.error) {
                        res.send({ output: data.error });
                    } else {
                        res.send({ output: "Unknown error occurred" });
                    }
                });
            }
        }
    }
    catch (e) {
        console.log("error")
    }
})

app.listen(8000)
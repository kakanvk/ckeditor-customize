import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Editor from "./components/CKEditor";
import { Settings } from "lucide-react";

function App() {
  
    const [value, setValue] = useState(`<h2>What new in this customize?</h2><ul class="todo-list"><li><label class="todo-list__label"><input type="checkbox" checked="checked" disabled="disabled"><span class="todo-list__label__description">Remove Watermask</span></label></li><li><label class="todo-list__label"><input type="checkbox" checked="checked" disabled="disabled"><span class="todo-list__label__description">Darkmode</span></label></li><li><label class="todo-list__label"><input type="checkbox" checked="checked" disabled="disabled"><span class="todo-list__label__description">Image Upload (Base64)</span></label></li><li><label class="todo-list__label"><input type="checkbox" checked="checked" disabled="disabled"><span class="todo-list__label__description">Code Block</span></label></li><li><label class="todo-list__label"><input type="checkbox" checked="checked" disabled="disabled"><span class="todo-list__label__description">Special Character</span></label></li><li><label class="todo-list__label"><input type="checkbox" checked="checked" disabled="disabled"><span class="todo-list__label__description">More…</span></label></li></ul>`);

    const handleChangeTheme = () => {
        const body = document.body;
        if (body.classList.contains("dark")) {
            body.classList.remove("dark");
        } else {
            body.classList.add("dark");
        }
    };

    return (
        <div className="Container">
            <div className="Header">
                <div>
                    <h1>Simple Editor for Everyone</h1>
                    <span>Powered by <a href="https://ckeditor.com" target="_blank">CKEditor 5</a>, customize by <a href="https://github.com/kakanvk" target="_blank">kakanvk</a></span>
                </div>
                <button
                    className="Theme__Button"
                    onClick={() => handleChangeTheme()}
                >
                    <Settings style={{width: "18px", height: "18px"}}/>Change Theme
                </button>
            </div>
            <div className="App">
                <Editor
                    value={value}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ data });
                        setValue(data);
                    }}
                    placeholder="Nhập nội dung bài viết"
                />
                <div
                    className="App__Review ck-content"
                    dangerouslySetInnerHTML={{
                        __html: value === "" ? "<p>Review here</p>" : value,
                    }}
                />
            </div>
        </div>
    );
}

export default App;

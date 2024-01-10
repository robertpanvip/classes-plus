export default class Clipboard {

    async writeText(text: string) {
        const placeholder = document.createElement("textarea");
        placeholder.setAttribute(
            "style",
            "position: absolute;overflow: hidden;width: 0;height: 0;top: 0;left: 0;"
        );
        placeholder.innerText = text;
        document.body.appendChild(placeholder);
        placeholder.select();
        try {
            document.execCommand("copy");
            placeholder.remove();
        } catch (err) {
            placeholder.remove();
            throw err;
        }
    }
}
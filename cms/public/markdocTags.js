CMS.registerEditorComponent({
    id: "custom_iframe_block",
    label: "iframe block",
    fields: [
        { name: "src", label: "Iframe URL", widget: "string" },
        { name: "caption", label: "Caption", widget: "string", required: false }
    ],
    pattern: /^{% iframe src="(.*?)"( caption="(.*?)")? %}{% \/iframe %}$/,
    fromBlock(match) {
        return {
            src: match[1],
            caption: match[3]
        }
    },
    toBlock({ src, caption }) {
        let block = `{% iframe src="${src}"`
        if (caption) block += ` caption="${caption}"`
        block += ` %}{% /iframe %}`
        return block
    },
    toPreview({ src, caption }) {
        return `<div style="padding: 10px; background: #f0f0f0; border-radius: 4px;">
        <p>Iframe: <a href="${src}" target="_blank">${src}</a></p>
        ${caption ? `<p><em>${caption}</em></p>` : ""}
      </div>`
    }
})

CMS.registerEditorComponent({
    id: "custom_image_block",
    label: "Image Block",
    fields: [
        { name: "src", label: "Image", widget: "image" },
        { name: "alt", label: "Alt Text", widget: "string", required: true },
        { name: "caption", label: "Caption", widget: "string", required: false },
        {
            name: "size",
            label: "Size",
            widget: "select",
            options: ["s", "m", "l"],
            required: false,
            default: ""
        }
    ],
    pattern: /^{% image src="(.*?)" alt="(.*?)"( caption="(.*?)")?( size="(.*?)")? %}{% \/image %}$/,
    fromBlock(match) {
        return {
            src: match[1],
            alt: match[2],
            caption: match[4],
            size: match[6]
        }
    },
    toBlock({ src, alt, caption, size }) {
        let block = `{% image src="${src}" alt="${alt}"`
        if (caption) block += ` caption="${caption}"`
        if (size) block += ` size="${size}"`
        block += ` %}{% /image %}`
        return block
    },
    toPreview({ src, alt, caption, size }) {
        const sizeClass = size ? `image-${size}` : ""
        return `<img src="${src}" alt="${alt}" class="${sizeClass}">${caption ? `<br/><em>${caption}</em>` : ""}`
    }
})

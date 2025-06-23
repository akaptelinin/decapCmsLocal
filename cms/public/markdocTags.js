CMS.registerEditorComponent({
    id: "custom_iframe_block",
    label: "iframe block",
    fields: [
        { name: "src", label: "Iframe URL", widget: "string" },
        { name: "width", label: "Width", widget: "number", required: false },
        { name: "height", label: "Height", widget: "number", required: false },
        { name: "caption", label: "Caption", widget: "string", required: false }
    ],
    pattern: /^{% iframe src="(.*?)"( width="(.*?)")?( height="(.*?)")?( caption="(.*?)")? %}{% \/iframe %}$/,
    fromBlock(match) {
        return {
            src: match[1],
            width: match[3],
            height: match[5],
            caption: match[7]
        }
    },
    toBlock({ src, width, height, caption }) {
        let block = `{% iframe src="${src}"`;
        if (width) block += ` width="${width}"`;
        if (height) block += ` height="${height}"`;
        if (caption) block += ` caption="${caption}"`;

        block += ` %}{% /iframe %}`;

        return block;
    },
    toPreview({ src, width, height, caption }) {
        const blockWidth = width ?? "auto";
        const blockHeight = height ?? "auto";

        return `
            <div style="padding:10px;background:#f0f0f0;border-radius:4px;">
                <iframe
                    style="max-width: 100%"
                    src="${src}"
                    width="${blockWidth}"
                    height="${blockHeight}"
                ></iframe>
                ${caption ? `<p><em>${caption}</em></p>` : ""}
            </div>
        `;
    }
})

CMS.registerEditorComponent({
    id: "custom_image_block",
    label: "Image Block",
    fields: [
        { name: "src", label: "Image", widget: "image", required: true },
        { name: "alt", label: "Alt Text", widget: "string", required: true },
        { name: "caption", label: "Caption", widget: "string", required: false },
        {
            name: "size",
            label: "Size",
            widget: "select",
            options: ["s", "m", "l"],
            required: false,
            default: ""
        },
        { name: "width", label: "Width", widget: "number", required: false },
        { name: "height", label: "Height", widget: "number", required: false }
    ],

    pattern: /^{% image\s+src="([^"]+)"(?:\s+alt="([^"]*)")?(?:\s+caption="([^"]*)")?(?:\s+size="([^"]*)")?(?:\s+width="([^"]*)")?(?:\s+height="([^"]*)")?\s+%}{% \/image %}$/,

    fromBlock(match) {
        return {
            src: match[1],
            alt: match[2],
            caption: match[3],
            size: match[4],
            width: match[5],
            height: match[6]
        }
    },

    toBlock({ src, alt, caption, size, width, height }) {
        let block = `{% image src="${src}"`;

        if (alt) block += ` alt="${alt}"`;
        if (caption) block += ` caption="${caption}"`;
        if (size) block += ` size="${size}"`;
        if (width) block += ` width="${width}"`;
        if (height) block += ` height="${height}"`;

        block += ` %}{% /image %}`;

        return block;
    },

    toPreview({src, alt, caption, size, width, height}, getAsset) {
        let url = getAsset ? getAsset(src) : src;

        if (typeof url === "object" && url.toString) url = url.toString();
        if (url && !/^blob:|^https?:|^\//.test(url)) url = "/" + url;

        const sizeClass = size ? `image-${size}` : "";
        const dimAttr = `${width ? ` width="${width}"` : ""}${height ? ` height="${height}"` : ""}`;

        return `
            <img
                src="${url}"
                alt="${alt || ""}"
                class="${sizeClass}"
                ${dimAttr}
            >
            ${caption ? `<br/><em>${caption}</em>` : ""}
        `;
    }
})

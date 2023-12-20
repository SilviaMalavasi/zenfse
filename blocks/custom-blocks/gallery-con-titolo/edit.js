import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function Edit({ className }) {
  const blockProps = useBlockProps();

  const TEMPLATE = [
    [
      "core/group",
      { className: "gallery-con-titolo-cont", backgroundColor: "rosa-scuro" },
      [
        ["core/heading", { placeholder: "Inserisci il titolo del gruppo", level: 2, textAlign: "center" }],
        ["blocks/gallery", {}],
      ],
    ],
  ];

  return (
    <div
      {...blockProps}
      className={`${className || ""} zenfse-block gallery-con-titolo edit`}
    >
      <InnerBlocks template={TEMPLATE} />
    </div>
  );
}

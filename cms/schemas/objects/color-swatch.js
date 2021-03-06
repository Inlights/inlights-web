import React from "react";

export default {
  title: "Color",
  name: "colorSwatch",
  type: "document",
  preview: {
    select: {
      title: "name",
      color: "color",
    },
    prepare({ title, color }) {
      const { hex } = color;
      let subtitle = hex || "No color set";
      return {
        title: title,
        subtitle: subtitle,
        description: "",
        media: () => (
          <div
            style={{
              backgroundColor: hex || "#000",
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0",
              left: "0",
              borderRadius: "100%",
            }}
          />
        ),
      };
    },
  },
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "color",
      type: "color",
    },
  ],
  orderings: [
    {
      title: "Color Name",
      name: "colorName",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
};

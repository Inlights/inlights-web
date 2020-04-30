import { MdArtTrack } from "react-icons/md";

export default {
  type: "document",
  name: "heroSection",
  title: "Hero Section",
  icon: MdArtTrack,
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Subheading",
      name: "subheading",
      type: "simpleText",
    },
    {
      title: "Media",
      name: "media",
      type: "array",
      of: [
        { type: "imageAsset" },
        {
          title: "Animation",
          name: "animation",
          type: "reference",
          description: "Add an animation",
          to: [{ type: "animation" }],
        },
      ],
      validation: (Rule) => Rule.max(1),
    },
    {
      title: "Appearance",
      name: "appearance",
      type: "section",
    },
  ],
  preview: {
    select: {
      title: "heading",
      media: "image",
    },
    prepare({ title }) {
      return {
        title: "Hero Section",
        subtitle: title,
      };
    },
  },
};

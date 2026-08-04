import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    // 画像の配列（ローカル画像またはURL文字列の両方を許容する設定例）
    images: z.array(
      z.union([
        image(), // src/assets/ などのローカル画像
        z.string().url() // https://〜 などの外部画像URL
      ])
    ).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};

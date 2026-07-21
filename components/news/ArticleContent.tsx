import { prepareWordPressContent } from "@/lib/news-utils";

interface ArticleContentProps {
  content: string;
}

export default function ArticleContent({
  content,
}: ArticleContentProps) {
  const preparedContent = prepareWordPressContent(content);

  return (
    <div
      className="
        article-content
        text-[16px]
        leading-8
        text-neutral-700

        [&_a]:font-semibold
        [&_a]:text-[#875715]
        [&_a]:underline
        [&_a]:decoration-amber-400/50
        [&_a]:underline-offset-4

        [&_blockquote]:my-8
        [&_blockquote]:rounded-r-[18px]
        [&_blockquote]:border-l-4
        [&_blockquote]:border-amber-400
        [&_blockquote]:bg-[#f6eedc]
        [&_blockquote]:px-6
        [&_blockquote]:py-5
        [&_blockquote]:italic

        [&_figure]:my-8
        [&_figure]:max-w-full

        [&_figcaption]:mt-3
        [&_figcaption]:text-center
        [&_figcaption]:text-xs
        [&_figcaption]:leading-5
        [&_figcaption]:text-neutral-500

        [&_h2]:mb-4
        [&_h2]:mt-10
        [&_h2]:text-3xl
        [&_h2]:font-black
        [&_h2]:leading-tight
        [&_h2]:text-neutral-950

        [&_h3]:mb-3
        [&_h3]:mt-8
        [&_h3]:text-2xl
        [&_h3]:font-bold
        [&_h3]:text-neutral-950

        [&_h4]:mb-3
        [&_h4]:mt-7
        [&_h4]:text-xl
        [&_h4]:font-bold
        [&_h4]:text-neutral-950

        [&_iframe]:my-8
        [&_iframe]:aspect-video
        [&_iframe]:h-auto
        [&_iframe]:w-full
        [&_iframe]:rounded-[20px]

        [&_img]:h-auto
        [&_img]:max-w-full
        [&_img]:rounded-[18px]
        [&_img]:object-cover
        [&_img]:shadow-[0_12px_35px_rgba(40,28,10,0.12)]

        [&_li]:mb-2

        [&_ol]:my-5
        [&_ol]:list-decimal
        [&_ol]:pl-6

        [&_p]:mb-6

        [&_strong]:font-bold
        [&_strong]:text-neutral-900

        [&_table]:my-8
        [&_table]:w-full
        [&_table]:border-collapse

        [&_td]:border
        [&_td]:border-neutral-200
        [&_td]:p-3

        [&_th]:border
        [&_th]:border-neutral-200
        [&_th]:bg-neutral-100
        [&_th]:p-3
        [&_th]:text-left

        [&_ul]:my-5
        [&_ul]:list-disc
        [&_ul]:pl-6

        [&_.wp-block-gallery]:my-9
        [&_.wp-block-gallery]:grid
        [&_.wp-block-gallery]:grid-cols-1
        [&_.wp-block-gallery]:gap-4
        sm:[&_.wp-block-gallery]:grid-cols-2

        [&_.wp-block-gallery_figure]:m-0
        [&_.wp-block-gallery_img]:h-full
        [&_.wp-block-gallery_img]:min-h-[220px]
        [&_.wp-block-gallery_img]:w-full
        [&_.wp-block-gallery_img]:object-cover

        [&_.blocks-gallery-grid]:my-9
        [&_.blocks-gallery-grid]:grid
        [&_.blocks-gallery-grid]:list-none
        [&_.blocks-gallery-grid]:grid-cols-1
        [&_.blocks-gallery-grid]:gap-4
        [&_.blocks-gallery-grid]:p-0
        sm:[&_.blocks-gallery-grid]:grid-cols-2

        [&_.blocks-gallery-item]:m-0
        [&_.blocks-gallery-item_img]:h-full
        [&_.blocks-gallery-item_img]:min-h-[220px]
        [&_.blocks-gallery-item_img]:w-full
        [&_.blocks-gallery-item_img]:object-cover
      "
      dangerouslySetInnerHTML={{
        __html: preparedContent,
      }}
    />
  );
}
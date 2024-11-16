import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  active?: boolean;
  archived?: boolean;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  active,
  archived,
}: Props) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border-4 hover:shadow-lg transition-all duration-300 ease-out h-full",
        {
          "border-green-500 dark:border-green-700": active,
          "opacity-70": archived,
        }
      )}
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer relative", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            layout="responsive"
            width={1920}
            height={1080}
            quality={100} // Ensure maximum quality
            priority
            className="h-40 w-full object-cover object-top"
            style={{
              imageRendering: "crisp-edges", // For sharper images
              backfaceVisibility: "hidden",
            }}
          />
        )}
        {active && (
          <Badge
            className="absolute top-2 right-2 bg-green-500 text-white"
            style={{
              fontSize: "0.75rem",
              fontWeight: "bold",
              WebkitFontSmoothing: "antialiased",
              transform: "scale(1.1)",
            }}
          >
            Active
          </Badge>
        )}
        {archived && (
          <Badge
            className="absolute top-2 right-2 bg-gray-500 text-white"
            style={{
              fontSize: "0.75rem",
              fontWeight: "bold",
              WebkitFontSmoothing: "antialiased",
              transform: "scale(1.1)",
            }}
          >
            Archived
          </Badge>
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle
            className="mt-1 text-base"
            style={{
              textRendering: "optimizeLegibility",
              WebkitFontSmoothing: "antialiased",
            }}
          >
            {title}
          </CardTitle>
          <time
            className="font-sans text-xs"
            style={{ textRendering: "optimizeLegibility" }}
          >
            {dates}
          </time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full font-sans text-sm text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge
                  key={idx}
                  className="flex gap-2 px-2 py-1 text-[10px]"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "500",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

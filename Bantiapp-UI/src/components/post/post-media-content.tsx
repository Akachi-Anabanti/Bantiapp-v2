interface MediaFile {
  type: "image" | "video" | "audio" | "gif" | "file";
  url: string;
  filename?: string;
  fileSize?: string;
  mimeType?: string;
}

interface LinkPreview {
  title: string;
  description: string;
  image?: string;
  url: string;
  domain: string;
}

interface PostMediaProps {
  media?: MediaFile[];
  link?: LinkPreview;
  className?: string;
}

export function PostMedia({ media, link, className }: PostMediaProps) {
  if (!media?.length && !link) return null;

  // Handle link preview
  if (link && !media?.length) {
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block mt-2 rounded-xl border overflow-hidden hover:bg-muted/50 transition-colors ${className}`}
      >
        {link.image && (
          <div className="relative h-48 w-full">
            <img
              src={link.image}
              alt={link.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-3">
          <p className="text-sm text-muted-foreground">{link.domain}</p>
          <h3 className="font-semibold">{link.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {link.description}
          </p>
        </div>
      </a>
    );
  }

  // Handle media files (max 4)
  if (media?.length) {
    const renderMedia = (file: MediaFile) => {
      switch (file.type) {
        case "image":
        case "gif":
          return (
            <img src={file.url} alt="" className="w-full h-full object-cover" />
          );
        case "video":
          return (
            <video
              src={file.url}
              className="w-full h-full object-cover"
              controls
            />
          );
        case "audio":
          return (
            <div className="w-full h-full flex items-center justify-center bg-muted p-4">
              <audio src={file.url} controls className="w-full" />
            </div>
          );
        case "file":
          return (
            <div className="w-full h-full flex flex-col items-center justify-center bg-muted p-4">
              <div className="text-muted-foreground text-sm">
                {file.filename}
              </div>
              <div className="text-xs text-muted-foreground">
                {file.fileSize}
              </div>
            </div>
          );
        default:
          return null;
      }
    };

    const gridTemplates = {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-2",
      4: "grid-cols-2",
    };

    return (
      <div
        className={`mt-2 grid gap-0.5 rounded-xl overflow-hidden ${
          gridTemplates[Math.min(media.length, 4) as keyof typeof gridTemplates]
        } ${className}`}
      >
        {media.slice(0, 4).map((file, index) => (
          <div
            key={file.url}
            className={`relative ${
              media.length === 3 && index === 0 ? "col-span-2" : ""
            } ${
              file.type === "file" || file.type === "audio"
                ? "aspect-video"
                : "aspect-square"
            }`}
          >
            {renderMedia(file)}
          </div>
        ))}
      </div>
    );
  }

  return null;
}

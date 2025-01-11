import React, { useState, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  ImageIcon,
  VideoIcon,
  FileIcon,
  MusicIcon,
  XIcon,
  Link2Icon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MediaFile {
  file: File;
  type: "image" | "video" | "audio" | "gif" | "file";
  preview: string;
}

interface PostFormProps {
  user: {
    avatar: string;
    username: string;
  };
  onSubmit: (data: {
    content: string;
    media?: File[];
    link?: string;
  }) => Promise<void>;
}

export function PostCreationForm({ user, onSubmit }: PostFormProps) {
  const [content, setContent] = useState("");
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [link, setLink] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getFileType = (file: File): MediaFile["type"] => {
    if (file.type.startsWith("image/gif")) return "gif";
    if (file.type.startsWith("image/")) return "image";
    if (file.type.startsWith("video/")) return "video";
    if (file.type.startsWith("audio/")) return "audio";
    return "file";
  };

  const createFilePreview = (file: File): string => {
    const type = getFileType(file);
    if (type === "image" || type === "gif") {
      return URL.createObjectURL(file);
    }
    return "";
  };

  const handleMediaSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length + mediaFiles.length > 4) {
      alert("Maximum 4 media files allowed");
      return;
    }

    const newMediaFiles = files.map((file) => ({
      file,
      type: getFileType(file),
      preview: createFilePreview(file),
    }));

    setMediaFiles((prev) => [...prev, ...newMediaFiles]);
  };

  const removeMedia = (index: number) => {
    setMediaFiles((prev) => {
      const newFiles = [...prev];
      if (newFiles[index].preview) {
        URL.revokeObjectURL(newFiles[index].preview);
      }
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() && !mediaFiles.length && !link) return;

    setIsSubmitting(true);
    try {
      await onSubmit({
        content,
        media: mediaFiles.length ? mediaFiles.map((m) => m.file) : undefined,
        link: link || undefined,
      });

      // Cleanup previews
      mediaFiles.forEach((media) => {
        if (media.preview) {
          URL.revokeObjectURL(media.preview);
        }
      });

      setContent("");
      setMediaFiles([]);
      setLink("");
    } catch (error) {
      console.error("Failed to create post:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderMediaPreview = (media: MediaFile, index: number) => {
    switch (media.type) {
      case "image":
      case "gif":
        return (
          <img
            src={media.preview}
            alt=""
            className="w-full h-full object-cover"
          />
        );
      case "video":
        return (
          <video
            src={URL.createObjectURL(media.file)}
            className="w-full h-full object-cover"
            controls
          />
        );
      case "audio":
        return (
          <div className="w-full h-full flex items-center justify-center bg-muted p-4">
            <MusicIcon className="h-8 w-8 text-muted-foreground" />
            <span className="ml-2 text-sm">{media.file.name}</span>
          </div>
        );
      case "file":
        return (
          <div className="w-full h-full flex items-center justify-center bg-muted p-4">
            <FileIcon className="h-8 w-8 text-muted-foreground" />
            <span className="ml-2 text-sm">{media.file.name}</span>
          </div>
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-b p-4">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src={user.avatar} alt={user.username} />
          <AvatarFallback>{user.username[0]}</AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-4">
          <Textarea
            placeholder="What's happening?"
            value={content}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setContent(e.target.value)}
            className="min-h-[100px] resize-none border-none focus-visible:ring-0"
          />

          {/* Media Preview */}
          {mediaFiles.length > 0 && (
            <div
              className={cn(
                "grid gap-2 mt-2",
                mediaFiles.length === 1 ? "grid-cols-1" : "grid-cols-2"
              )}
            >
              {mediaFiles.map((media, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-xl overflow-hidden"
                >
                  {renderMediaPreview(media, index)}
                  <button
                    type="button"
                    onClick={() => removeMedia(index)}
                    className="absolute top-2 right-2 p-1 rounded-full bg-black/50 hover:bg-black/70"
                  >
                    <XIcon className="h-4 w-4 text-white" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Link Input */}
          {!mediaFiles.length && (
            <div className="flex gap-2 items-center">
              <Link2Icon className="h-4 w-4 text-muted-foreground" />
              <input
                type="url"
                placeholder="Add a link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="flex-1 bg-transparent border-none focus:outline-none text-sm"
              />
            </div>
          )}

          <div className="flex justify-between items-center pt-4 border-t">
            <div className="flex gap-2">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleMediaSelect}
                accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx"
                multiple
                className="hidden"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => fileInputRef.current?.click()}
                disabled={mediaFiles.length >= 4 || !!link}
              >
                <ImageIcon className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                disabled={mediaFiles.length >= 4 || !!link}
              >
                <FileIcon className="h-4 w-4" />
              </Button>
            </div>

            <Button
              type="submit"
              disabled={
                (!content.trim() && !mediaFiles.length && !link) || isSubmitting
              }
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

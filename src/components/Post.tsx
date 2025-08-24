import { Heart, MessageCircle, Share, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

interface PostProps {
  id: number;
  username: string;
  avatar: string;
  image: string;
  likes: number;
  caption: string;
  comments: number;
  timeAgo: string;
}

export const Post = ({ username, avatar, image, likes, caption, comments, timeAgo }: PostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <Card className="bg-card shadow-card hover:shadow-card-hover transition-all duration-300 mb-6 border-0 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10 ring-2 ring-gradient-primary">
            <AvatarImage src={avatar} alt={username} />
            <AvatarFallback className="bg-gradient-primary text-primary-foreground font-medium">
              {username[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-card-foreground text-sm">{username}</h3>
            <p className="text-muted-foreground text-xs">{timeAgo}</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-secondary">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Image */}
      <div className="relative">
        <img 
          src={image} 
          alt="Post image" 
          className="w-full aspect-square object-cover"
        />
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className={`h-8 p-1 hover:bg-secondary ${
                isLiked ? 'text-primary hover:text-primary' : 'text-muted-foreground'
              }`}
              onClick={handleLike}
            >
              <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 p-1 text-muted-foreground hover:bg-secondary">
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 p-1 text-muted-foreground hover:bg-secondary">
              <Share className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Likes */}
        <div className="mb-2">
          <p className="font-semibold text-sm text-card-foreground">
            {likesCount.toLocaleString()} likes
          </p>
        </div>

        {/* Caption */}
        <div className="mb-2">
          <p className="text-sm text-card-foreground">
            <span className="font-semibold mr-2">{username}</span>
            {caption}
          </p>
        </div>

        {/* Comments */}
        {comments > 0 && (
          <button className="text-sm text-muted-foreground hover:text-card-foreground transition-colors">
            View all {comments} comments
          </button>
        )}
      </div>
    </Card>
  );
};
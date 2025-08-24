import { Post } from "./Post";
import avatarRohit from "@/assets/avatar-rohit.jpg";
import avatarPriya from "@/assets/avatar-priya.jpg";
import avatarAmit from "@/assets/avatar-amit.jpg";
import avatarSunita from "@/assets/avatar-sunita.jpg";
import avatarRaj from "@/assets/avatar-raj.jpg";
import postSunset from "@/assets/post-sunset.jpg";
import postFood from "@/assets/post-food.jpg";
import postBeach from "@/assets/post-beach.jpg";
import postWorkout from "@/assets/post-workout.jpg";
import postArt from "@/assets/post-art.jpg";

const posts = [
  {
    id: 1,
    username: "रोहित_फोटोग्राफर",
    avatar: avatarRohit,
    image: postSunset,
    likes: 142,
    caption: "आज का sunset बहुत खूबसूरत था! 🌅 #photography #sunset #nature",
    comments: 8,
    timeAgo: "2 hours ago"
  },
  {
    id: 2,
    username: "प्रिया_फूड_लवर",
    avatar: avatarPriya,
    image: postFood,
    likes: 89,
    caption: "घर का बना दाल चावल ❤️ सबसे अच्छा खाना! #homemade #food #love",
    comments: 12,
    timeAgo: "4 hours ago"
  },
  {
    id: 3,
    username: "अमित_ट्रैवलर",
    avatar: avatarAmit,
    image: postBeach,
    likes: 234,
    caption: "गोवा के beaches पर weekend trip! 🏖️ Life is good! #goa #beach #travel #weekend",
    comments: 25,
    timeAgo: "6 hours ago"
  },
  {
    id: 4,
    username: "सुनीता_फिटनेस",
    avatar: avatarSunita,
    image: postWorkout,
    likes: 76,
    caption: "Morning workout complete! 💪 Stay healthy, stay happy! #fitness #morning #health",
    comments: 5,
    timeAgo: "8 hours ago"
  },
  {
    id: 5,
    username: "राज_आर्टिस्ट",
    avatar: avatarRaj,
    image: postArt,
    likes: 156,
    caption: "नया painting बनाया है! Art is life 🎨 #art #painting #creative #artist",
    comments: 18,
    timeAgo: "10 hours ago"
  }
];

export const Feed = () => {
  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
          Hindi Feed Vibes
        </h1>
        <p className="text-muted-foreground">Connect with your community</p>
      </div>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

import React from "react";
import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play, Clock } from "lucide-react";

const ResourcesVideos = () => {
  const beginnerVideos = [
    {
      id: 1,
      title: "Getting Started with AI Call Center",
      description: "Learn the basics of setting up your AI Call Center.",
      duration: "5:30",
      thumbnail: "/placeholder.svg",
      videoUrl: "#"
    },
    {
      id: 2,
      title: "Introduction to Virtual Assistant",
      description: "Your first steps with our Virtual Assistant solution.",
      duration: "8:45",
      thumbnail: "/placeholder.svg",
      videoUrl: "#"
    },
    {
      id: 3,
      title: "Analytics Suite Overview",
      description: "A beginner's guide to our Analytics Suite.",
      duration: "6:15",
      thumbnail: "/placeholder.svg",
      videoUrl: "#"
    }
  ];

  const advancedVideos = [
    {
      id: 1,
      title: "Advanced Call Routing Configuration",
      description: "Deep dive into call routing and automation features.",
      duration: "12:20",
      thumbnail: "/placeholder.svg",
      videoUrl: "#"
    },
    {
      id: 2,
      title: "Custom Skills for Virtual Assistant",
      description: "Learn how to create custom skills for your assistant.",
      duration: "15:08",
      thumbnail: "/placeholder.svg",
      videoUrl: "#"
    },
    {
      id: 3,
      title: "Predictive Analytics Masterclass",
      description: "Advanced techniques for predictive customer analytics.",
      duration: "18:35",
      thumbnail: "/placeholder.svg",
      videoUrl: "#"
    }
  ];

  const renderVideoCards = (videos) => {
    return videos.map(video => (
      <Card key={video.id} className="overflow-hidden">
        <div className="relative group">
          <AspectRatio ratio={16 / 9}>
            <img 
              src={video.thumbnail} 
              alt={video.title} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
            <Button variant="secondary" size="icon">
              <Play className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{video.duration}</span>
          </div>
        </div>
        <CardHeader>
          <CardTitle>{video.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{video.description}</CardDescription>
        </CardContent>
        <CardFooter>
          <Button variant="default" className="w-full" asChild>
            <a href={video.videoUrl}>Watch Video</a>
          </Button>
        </CardFooter>
      </Card>
    ));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-24">
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Video Tutorials</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn how to make the most of our AI solutions through our comprehensive video tutorials
            </p>
          </div>
          
          <Tabs defaultValue="beginner" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="beginner">Beginner Tutorials</TabsTrigger>
                <TabsTrigger value="advanced">Advanced Tutorials</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="beginner">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {renderVideoCards(beginnerVideos)}
              </div>
            </TabsContent>
            <TabsContent value="advanced">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {renderVideoCards(advancedVideos)}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesVideos;


import React from "react";
import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Code, Copy, ExternalLink, Lock, Unlock } from "lucide-react";

const ResourcesAPI = () => {
  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    // In a real app, you might want to show a toast notification here
  };

  const apiEndpoints = [
    {
      method: "GET",
      endpoint: "/api/v1/calls",
      description: "Retrieve all call records",
      authentication: true,
      parameters: [
        { name: "page", type: "number", required: false, description: "Page number for pagination" },
        { name: "limit", type: "number", required: false, description: "Number of results per page" }
      ]
    },
    {
      method: "POST",
      endpoint: "/api/v1/calls",
      description: "Create a new call record",
      authentication: true,
      parameters: [
        { name: "callerId", type: "string", required: true, description: "ID of the caller" },
        { name: "duration", type: "number", required: true, description: "Call duration in seconds" },
        { name: "notes", type: "string", required: false, description: "Notes about the call" }
      ]
    },
    {
      method: "GET",
      endpoint: "/api/v1/analytics",
      description: "Get analytics data",
      authentication: true,
      parameters: [
        { name: "startDate", type: "date", required: true, description: "Start date for analytics" },
        { name: "endDate", type: "date", required: true, description: "End date for analytics" },
        { name: "format", type: "string", required: false, description: "Response format (json, csv)" }
      ]
    }
  ];

  const sampleCode = {
    javascript: `// Using fetch API
fetch('https://api.example.com/api/v1/calls', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`,

    python: `# Using requests library
import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.example.com/api/v1/calls', headers=headers)
data = response.json()
print(data)`,

    curl: `curl -X GET \\
  https://api.example.com/api/v1/calls \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -H 'Content-Type: application/json'`
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-24">
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">API Reference</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive documentation for integrating with our API
            </p>
          </div>
          
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Getting Started</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg mb-4">
                  To use our API, you'll need an API key. You can get one by registering for a developer account.
                </CardDescription>
                <div className="flex flex-col md:flex-row gap-6 justify-between">
                  <div>
                    <h3 className="font-semibold mb-2">Base URL</h3>
                    <div className="bg-muted p-3 rounded-md flex items-center justify-between">
                      <code>https://api.example.com</code>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8"
                        onClick={() => handleCopyCode('https://api.example.com')}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Authentication</h3>
                    <p className="text-sm">
                      Add the following header to all API requests:
                    </p>
                    <div className="bg-muted p-3 rounded-md mt-2 text-sm">
                      <code>Authorization: Bearer YOUR_API_KEY</code>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Rate Limits</h3>
                    <p className="text-sm">
                      <span className="font-medium">1000</span> requests per hour for standard plans
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">10,000</span> requests per hour for premium plans
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button variant="default" asChild>
                    <a href="#" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Register for API Access
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Endpoints</h2>
          <div className="space-y-6">
            {apiEndpoints.map((endpoint, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Badge className={
                        endpoint.method === "GET" ? "bg-blue-500" : 
                        endpoint.method === "POST" ? "bg-green-500" :
                        endpoint.method === "PUT" ? "bg-yellow-500" :
                        "bg-red-500"
                      }>
                        {endpoint.method}
                      </Badge>
                      <CardTitle className="font-mono text-lg">{endpoint.endpoint}</CardTitle>
                    </div>
                    {endpoint.authentication ? (
                      <div className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400">
                        <Lock className="h-4 w-4" />
                        <span className="text-xs">Authentication Required</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                        <Unlock className="h-4 w-4" />
                        <span className="text-xs">Public</span>
                      </div>
                    )}
                  </div>
                  <CardDescription>{endpoint.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">Parameters</h4>
                  <div className="border rounded-md overflow-hidden">
                    <div className="grid grid-cols-4 bg-muted px-4 py-2 font-medium text-sm">
                      <div>Name</div>
                      <div>Type</div>
                      <div>Required</div>
                      <div>Description</div>
                    </div>
                    <Separator />
                    {endpoint.parameters.map((param, paramIndex) => (
                      <React.Fragment key={paramIndex}>
                        <div className="grid grid-cols-4 px-4 py-2 text-sm">
                          <div className="font-mono">{param.name}</div>
                          <div>{param.type}</div>
                          <div>{param.required ? "Yes" : "No"}</div>
                          <div>{param.description}</div>
                        </div>
                        {paramIndex < endpoint.parameters.length - 1 && <Separator />}
                      </React.Fragment>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Code Examples</h2>
            <Tabs defaultValue="javascript">
              <TabsList className="mb-4">
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="curl">cURL</TabsTrigger>
              </TabsList>
              
              {Object.entries(sampleCode).map(([lang, code]) => (
                <TabsContent key={lang} value={lang}>
                  <div className="relative">
                    <div className="bg-muted p-4 rounded-lg overflow-x-auto font-mono text-sm">
                      <pre>{code}</pre>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => handleCopyCode(code)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesAPI;

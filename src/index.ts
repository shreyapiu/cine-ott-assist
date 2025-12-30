import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { ottDatabase, availablePlatforms, availableGenres } from "./database.js";

// Create server instance
const server = new McpServer({
  name: "ott-helper",
  version: "1.0.0",
});

// Tool 1: Get recommendations by platform and rating
server.registerTool(
  "get_recommendations_by_platform_and_rating",
  {
    description: "Get OTT recommendations filtered by platform and minimum IMDB rating",
    inputSchema: {
      platform: z
        .enum(["netflix", "prime", "hotstar", "sony", "peacock", "apple", "hulu", "disney+", "zee5","jiocinema"] as const)
        .describe("OTT platform name (netflix, prime, hotstar, sony, peacock, apple, hulu, disney+, zee5, jiocinema)"),
      minRating: z
        .number()
        .min(0)
        .max(10)
        .describe("Minimum IMDB rating (0-10)"),
      contentType: z
        .enum(["movie", "series", "both"] as const)
        .optional()
        .describe("Filter by content type: movie, series, or both (default: both)"),
    },
  },
  async ({ platform, minRating, contentType = "both" }) => {
    const filtered = ottDatabase.filter((item) => {
      const platformMatch = item.platforms.includes(platform.toLowerCase());
      const ratingMatch = item.imdbRating >= minRating;
      const typeMatch =
        contentType === "both" || item.type === contentType;
      return platformMatch && ratingMatch && typeMatch;
    });

    if (filtered.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No recommendations found on ${platform} with rating >= ${minRating}${
              contentType !== "both" ? ` of type ${contentType}` : ""
            }`,
          },
        ],
      };
    }

    const results = filtered
      .map((item) => `- ${item.title} (${item.imdbRating}/10, ${item.releaseYear}) - ${item.type}`)
      .join("\n");

    return {
      content: [
        {
          type: "text",
          text: `Found ${filtered.length} recommendations on ${platform}:\n\n${results}`,
        },
      ],
    };
  }
);

// Tool 2: Get recommendations by genre and rating
server.registerTool(
  "get_recommendations_by_genre_and_rating",
  {
    description:
      "Get OTT recommendations filtered by genre and minimum IMDB rating",
    inputSchema: {
      genre: z
        .enum([
          "action",
          "comedy",
          "drama",
          "sci-fi",
          "thriller",
          "horror",
          "romance",
          "adventure",
          "crime",
          "mystery",
          "fantasy",
          "history",
          "biography",
          "animation",
          "documentary",
        ] as const)
        .describe("Genre of content"),
      minRating: z
        .number()
        .min(0)
        .max(10)
        .describe("Minimum IMDB rating (0-10)"),
      contentType: z
        .enum(["movie", "series", "both"] as const)
        .optional()
        .describe("Filter by content type: movie, series, or both (default: both)"),
    },
  },
  async ({ genre, minRating, contentType = "both" }) => {
    const filtered = ottDatabase.filter((item) => {
      const genreMatch = item.genres.includes(genre.toLowerCase());
      const ratingMatch = item.imdbRating >= minRating;
      const typeMatch =
        contentType === "both" || item.type === contentType;
      return genreMatch && ratingMatch && typeMatch;
    });

    if (filtered.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No ${genre} recommendations found with rating >= ${minRating}${
              contentType !== "both" ? ` of type ${contentType}` : ""
            }`,
          },
        ],
      };
    }

    const results = filtered
      .map(
        (item) =>
          `- ${item.title} (${item.imdbRating}/10, ${item.releaseYear}) - ${item.type}\n  Available on: ${item.platforms.join(", ")}`
      )
      .join("\n\n");

    return {
      content: [
        {
          type: "text",
          text: `Found ${filtered.length} ${genre} recommendations:\n\n${results}`,
        },
      ],
    };
  }
);

// Tool 3: Get recommendations by multiple criteria
server.registerTool(
  "get_recommendations_by_criteria",
  {
    description:
      "Get OTT recommendations filtered by platform, genre, and minimum IMDB rating",
    inputSchema: {
      platform: z
        .enum(["netflix", "prime", "hotstar", "sony", "peacock", "apple", "hulu", "disney+", "zee5","jiocinema"] as const)
        .describe("OTT platform name"),
      genre: z
        .enum([
          "action",
          "comedy",
          "drama",
          "sci-fi",
          "thriller",
          "horror",
          "romance",
          "adventure",
          "crime",
          "mystery",
          "fantasy",
          "history",
          "biography",
          "animation",
          "documentary",
        ] as const)
        .describe("Genre of content"),
      minRating: z
        .number()
        .min(0)
        .max(10)
        .describe("Minimum IMDB rating (0-10)"),
      contentType: z
        .enum(["movie", "series", "both"] as const)
        .optional()
        .describe("Filter by content type: movie, series, or both (default: both)"),
    },
  },
  async ({ platform, genre, minRating, contentType = "both" }) => {
    const filtered = ottDatabase.filter((item) => {
      const platformMatch = item.platforms.includes(platform.toLowerCase());
      const genreMatch = item.genres.includes(genre.toLowerCase());
      const ratingMatch = item.imdbRating >= minRating;
      const typeMatch =
        contentType === "both" || item.type === contentType;
      return platformMatch && genreMatch && ratingMatch && typeMatch;
    });

    if (filtered.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No recommendations found on ${platform} for ${genre} with rating >= ${minRating}${
              contentType !== "both" ? ` of type ${contentType}` : ""
            }`,
          },
        ],
      };
    }

    const results = filtered
      .map(
        (item) =>
          `- ${item.title} (${item.imdbRating}/10, ${item.releaseYear}) - ${item.type}\n  ${item.description}`
      )
      .join("\n\n");

    return {
      content: [
        {
          type: "text",
          text: `Found ${filtered.length} recommendations on ${platform} for ${genre}:\n\n${results}`,
        },
      ],
    };
  }
);

// Tool 4: Get all content on a specific platform
server.registerTool(
  "get_all_content_on_platform",
  {
    description: "Get all available content on a specific platform",
    inputSchema: {
      platform: z
        .enum(["netflix", "prime", "hotstar", "sony", "peacock", "apple", "hulu", "disney+", "zee5", "jiocinema"] as const)
        .describe("OTT platform name"),
      sortByRating: z
        .boolean()
        .optional()
        .describe("Sort results by IMDB rating (highest first) - default: true"),
    },
  },
  async ({ platform, sortByRating = true }) => {
    let filtered = ottDatabase.filter((item) =>
      item.platforms.includes(platform.toLowerCase())
    );

    if (sortByRating) {
      filtered = filtered.sort((a, b) => b.imdbRating - a.imdbRating);
    }

    if (filtered.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No content found on ${platform}`,
          },
        ],
      };
    }

    const results = filtered
      .map(
        (item) =>
          `- ${item.title} (${item.imdbRating}/10, ${item.releaseYear}) - ${item.type}`
      )
      .join("\n");

    return {
      content: [
        {
          type: "text",
          text: `Found ${filtered.length} items on ${platform}:\n\n${results}`,
        },
      ],
    };
  }
);

// Tool 5: Get top-rated content
server.registerTool(
  "get_top_rated_content",
  {
    description: "Get the highest-rated OTT content",
    inputSchema: {
      limit: z
        .number()
        .min(1)
        .max(50)
        .optional()
        .describe("Maximum number of results (default: 10)"),
      genre: z
        .enum([
          "action",
          "comedy",
          "drama",
          "sci-fi",
          "thriller",
          "horror",
          "romance",
          "adventure",
          "crime",
          "mystery",
          "fantasy",
          "history",
          "biography",
          "animation",
          "documentary",
        ] as const)
        .optional()
        .describe("Filter by specific genre (optional)"),
      contentType: z
        .enum(["movie", "series", "both"] as const)
        .optional()
        .describe("Filter by content type (optional)"),
    },
  },
  async ({ limit = 10, genre, contentType = "both" }) => {
    let filtered = [...ottDatabase];

    if (genre) {
      filtered = filtered.filter((item) => item.genres.includes(genre.toLowerCase()));
    }

    if (contentType !== "both") {
      filtered = filtered.filter((item) => item.type === contentType);
    }

    const topRated = filtered
      .sort((a, b) => b.imdbRating - a.imdbRating)
      .slice(0, limit);

    if (topRated.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No content found${genre ? ` for ${genre}` : ""}${
              contentType !== "both" ? ` of type ${contentType}` : ""
            }`,
          },
        ],
      };
    }

    const results = topRated
      .map(
        (item) =>
          `${item.imdbRating}/10 - ${item.title} (${item.releaseYear}) - ${item.type}`
      )
      .join("\n");

    return {
      content: [
        {
          type: "text",
          text: `Top ${topRated.length} rated content${genre ? ` for ${genre}` : ""}${
            contentType !== "both" ? ` (${contentType}s)` : ""
          }:\n\n${results}`,
        },
      ],
    };
  }
);

// Tool 6: Search content by title
server.registerTool(
  "search_content_by_title",
  {
    description: "Search for OTT content by title",
    inputSchema: {
      title: z.string().describe("Title or partial title to search for"),
      exactMatch: z
        .boolean()
        .optional()
        .describe("Require exact title match (default: false for partial match)"),
    },
  },
  async ({ title, exactMatch = false }) => {
    const searchTerm = title.toLowerCase();
    const filtered = ottDatabase.filter((item) =>
      exactMatch
        ? item.title.toLowerCase() === searchTerm
        : item.title.toLowerCase().includes(searchTerm)
    );

    if (filtered.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No content found matching "${title}"`,
          },
        ],
      };
    }

    const results = filtered
      .map(
        (item) =>
          `- ${item.title} (${item.imdbRating}/10, ${item.releaseYear}) - ${item.type}\n  Available on: ${item.platforms.join(", ")}\n  Genres: ${item.genres.join(", ")}`
      )
      .join("\n\n");

    return {
      content: [
        {
          type: "text",
          text: `Found ${filtered.length} match(es):\n\n${results}`,
        },
      ],
    };
  }
);

// Tool 7: Get available platforms and genres
server.registerTool(
  "get_available_filters",
  {
    description: "Get all available platforms and genres for filtering",
    inputSchema: {},
  },
  async () => {
    return {
      content: [
        {
          type: "text",
          text: `Available Platforms:\n${availablePlatforms.map((p) => `- ${p}`).join("\n")}\n\nAvailable Genres:\n${availableGenres.map((g) => `- ${g}`).join("\n")}`,
        },
      ],
    };
  }
);

// Tool 8: Get content details
server.registerTool(
  "get_content_details",
  {
    description: "Get detailed information about a specific content",
    inputSchema: {
      title: z.string().describe("Title of the content to get details for"),
    },
  },
  async ({ title }) => {
    const content = ottDatabase.find(
      (item) => item.title.toLowerCase() === title.toLowerCase()
    );

    if (!content) {
      return {
        content: [
          {
            type: "text",
            text: `Content "${title}" not found`,
          },
        ],
      };
    }

    const details = `Title: ${content.title}
IMDB Rating: ${content.imdbRating}/10
Type: ${content.type.charAt(0).toUpperCase() + content.type.slice(1)}
Release Year: ${content.releaseYear}
Available on: ${content.platforms.join(", ")}
Genres: ${content.genres.join(", ")}
Description: ${content.description}`;

    return {
      content: [
        {
          type: "text",
          text: details,
        },
      ],
    };
  }
);

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("OTT Helper MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});

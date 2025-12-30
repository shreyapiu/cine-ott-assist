# OTT Helper MCP Server

A Model Context Protocol (MCP) server that provides intelligent OTT (Over-The-Top) content recommendations based on IMDB ratings, platform availability, and genre preferences.

## Features

- **Platform-based Recommendations**: Get content recommendations from specific OTT platforms (Netflix, Prime Video, Jio Hotstar, Sony Liv, and more)
- **Genre-based Filtering**: Find content by genre (action, drama, sci-fi, etc.)
- **Rating-based Filtering**: Filter content by minimum IMDB rating
- **Combined Criteria Search**: Search by platform + genre + rating simultaneously
- **Content Search**: Search for specific titles
- **Top-Rated Content**: Get the highest-rated content across all platforms
- **Detailed Information**: Get comprehensive details about specific content

## Available Platforms

- Netflix
- Prime Video (prime)
- Jio Hotstar (hotstar)
- Sony Liv (sony)
- Peacock
- Apple TV+
- Hulu
- Disney+
- Zee5
- JioCinema

## Available Genres

- Action
- Comedy
- Drama
- Sci-Fi
- Thriller
- Horror
- Romance
- Adventure
- Crime
- Mystery
- Fantasy
- History
- Biography
- Animation
- Documentary

## Installation

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

## Usage

### With Claude Desktop

1. Add the server to your Claude configuration file:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "ott-helper": {
      "command": "node",
      "args": ["/absolute/path/to/OTTHelper/build/index.js"]
    }
  }
}
```

2. Restart Claude Desktop

3. Use the tools in your conversations to get OTT recommendations

### With VS Code or Other Clients

Add the server configuration to your `mcp.json` file:

```json
{
  "servers": {
    "ott-helper": {
      "type": "stdio",
      "command": "node",
      "args": ["/path/to/OTTHelper/build/index.js"]
    }
  }
}
```

## Available Tools

### 1. `get_recommendations_by_platform_and_rating`
Get recommendations filtered by platform and minimum IMDB rating.

**Parameters:**
- `platform` (required): OTT platform name
- `minRating` (required): Minimum IMDB rating (0-10)
- `contentType` (optional): "movie", "series", or "both"

**Example:**
> Get me action movies on Netflix with rating >= 8

### 2. `get_recommendations_by_genre_and_rating`
Get recommendations filtered by genre and minimum IMDB rating.

**Parameters:**
- `genre` (required): Genre of content
- `minRating` (required): Minimum IMDB rating (0-10)
- `contentType` (optional): "movie", "series", or "both"

### 3. `get_recommendations_by_criteria`
Get recommendations filtered by platform, genre, and rating simultaneously.

**Parameters:**
- `platform` (required): OTT platform
- `genre` (required): Genre
- `minRating` (required): Minimum rating
- `contentType` (optional): "movie" or "series"

### 4. `get_all_content_on_platform`
Get all available content on a specific platform.

**Parameters:**
- `platform` (required): OTT platform
- `sortByRating` (optional): Sort by rating (default: true)

### 5. `get_top_rated_content`
Get the highest-rated OTT content.

**Parameters:**
- `limit` (optional): Maximum number of results (default: 10)
- `genre` (optional): Filter by genre
- `contentType` (optional): "movie" or "series"

### 6. `search_content_by_title`
Search for content by title.

**Parameters:**
- `title` (required): Title or partial title
- `exactMatch` (optional): Require exact match (default: false)

### 7. `get_available_filters`
Get all available platforms and genres for filtering.

### 8. `get_content_details`
Get detailed information about specific content.

**Parameters:**
- `title` (required): Title of the content

## Architecture

The server consists of:

- **`src/index.ts`**: Main MCP server with tool definitions and request handlers
- **`src/database.ts`**: Sample OTT content database with movies and series
- **`tsconfig.json`**: TypeScript configuration
- **`package.json`**: Project dependencies and build scripts

## Building and Running

Development mode:
```bash
npm run dev
```

Build:
```bash
npm run build
```

Run built version:
```bash
npm start
```

## Sample Data

The server comes with sample data including popular movies and TV series like:
- Breaking Bad
- The Office
- Inception
- Stranger Things
- And more!

You can extend the database by modifying the `ottDatabase` array in `src/database.ts`.

## Future Enhancements

- Integration with real OTT APIs for live content updates
- User preferences and personalized recommendations
- Watch history tracking
- Rating and review system
- Multi-language support
- Advanced ML-based recommendation algorithms

## License

MIT

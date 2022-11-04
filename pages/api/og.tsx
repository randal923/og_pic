/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "#2A2A2A",
            borderRadius: "10px",
            width: "500px",
            height: "200px",
            display: "flex",
            padding: "20px",
          }}
        >
          <img
            alt="track album image"
            height="150px"
            width="150px"
            style={{ borderRadius: "10px" }}
            src="https://staging.soundchain.io/_next/image?url=https%3A%2F%2Fsoundchain-api-staging-uploads.s3.us-east-1.amazonaws.com%2F6372f6a0-8b5e-40bb-a7b1-3dc8397ce553&w=828&q=75"
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px",
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                alt="profile image"
                height="45px"
                width="45px"
                style={{ borderRadius: "50%" }}
                src="https://staging.soundchain.io/_next/image?url=https%3A%2F%2Fsoundchain-api-staging-uploads.s3.us-east-1.amazonaws.com%2Fa8080a47-b0ae-40f5-99ac-4ac4153fd120.jpeg&w=48&q=75"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginLeft: "10px",
                  gap: "2px",
                }}
              >
                <a
                  href="https://staging.soundchain.io/tracks/635430aa17cc480009c49ab5"
                  style={{
                    fontSize: "16px",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  furda_sc
                </a>
                <a
                  href="https://staging.soundchain.io/tracks/635430aa17cc480009c49ab5"
                  style={{
                    fontSize: "14px",
                    color: "darkgray",
                    fontWeight: "500",
                  }}
                >
                  @furda_sc
                </a>
              </div>
            </div>

            <h2 style={{ color: "white" }}>Boombap</h2>
            <div style={{ display: "flex" }}>
              <span style={{ marginRight: "10px", color: "white" }}>
                128 Following
              </span>
              <span style={{ color: "white" }}>30 Followers</span>
            </div>
          </div>
        </div>
      ),
      {
        width: 500,
        height: 200,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

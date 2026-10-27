export const imageSize: Record<string, [number, number]> = {
  "/images/unsplash/award-celebration.webp": [800, 1200],
  "/images/unsplash/building-exterior.webp": [1200, 802],
  "/images/unsplash/collaboration.webp": [800, 600],
  "/images/unsplash/datacenter.webp": [800, 450],
  "/images/unsplash/hero-coworking.webp": [1920, 1282],
  "/images/unsplash/innovation-team.webp": [1200, 1800],
  "/images/unsplash/partnership.webp": [800, 532],
  "/images/unsplash/startup-team.webp": [800, 534],
  "/images/unsplash/team-meeting.webp": [800, 534],
  "/images/unsplash/team-working.webp": [1200, 900],
  "/images/unsplash/tech-ai.webp": [800, 534],
  "/images/unsplash/tech-work.webp": [800, 534],
  "/images/og.webp": [1200, 630],
};

export function sizeOf(src: string): [number, number] {
  return imageSize[src] || [1200, 800];
}

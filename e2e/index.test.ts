import { test, expect } from '@playwright/test';

test('landing page shows main content and features', async ({ page }) => {
  await page.goto('/');
  
  // Check main heading
  const heading = page.getByText('Task Raver');
  await expect(heading).toBeVisible();
  
  // Check subheading
  const subheading = page.getByText('Turn your to-do list into a soundtrack.');
  await expect(subheading).toBeVisible();
  
  // Check features
  const features = [
    'AI-Powered Task Planning',
    'Music to Move You',
    'Personalised Task Playlists'
  ];
  
  for (const feature of features) {
    const featureElement = page.getByText(feature);
    await expect(featureElement).toBeVisible();
  }
  
  // Check CTA buttons
  const ctaButtons = [
    'Get Started',
    'Start Your Musical Journey'
  ];
  
  for (const buttonText of ctaButtons) {
    const button = page.getByRole('button', { name: buttonText });
    await expect(button).toBeVisible();
  }
}); 
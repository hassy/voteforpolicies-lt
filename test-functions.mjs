import { expect } from '@playwright/test';

export async function basicExploration(page) {
  let i = 0;
  await page.goto('https://voteforpolicies.org.uk/survey');
  await page.getByRole('button', { name: 'Accept' }).click();

  // These are the categories (e.g. Brexit, Economy, etc)
  await page.locator('div:nth-child(5) > .Checkbox').click();

  await page.locator('div').filter({ hasText: /^Take the survey$/ }).first().click();
  await page.locator('div').filter({ hasText: /^England$/ }).first().click();

  await page.getByText('Continue').nth(1).click();

  await page.getByText('Add to shortlist').click();
  await page.getByText('No thanks', { exact: true }).click();
  await page.getByText('No thanks', { exact: true }).click();
  await page.getByText('Add to shortlist').click();
  await page.getByText('Add to shortlist').click();
  
  await page.getByText('Choose this policy').nth(0).click();
  await page.getByText('Continue').nth(i++).click();

  await expect(page.getByText('Great, you\'ve completed the')).toBeVisible();
  
  await expect(page.locator('div').filter({ hasText: /^My Constituency$/ }).first()).toBeVisible();
  
  await page.getByRole('textbox', { name: 'Enter your post code' }).click();
  await page.getByRole('textbox', { name: 'Enter your post code' }).click();
  await page.getByRole('textbox', { name: 'Enter your post code' }).fill('E8 1AB');
  await page.locator('div:nth-child(4) > .CustomButton').first().click();
  
  await expect(page.getByText('Your elected MP:').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Register to vote' })).toBeVisible();
}

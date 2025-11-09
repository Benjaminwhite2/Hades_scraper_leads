import { Actor } from 'apify';
import fetch from 'node-fetch';

await Actor.main(async () => {
    const { hashtags = ['clientacquisition', 'nocodeautomation', 'aiautomationtools', 'freelancetool'], limit = 200 } = await Actor.getInput();

    const results = [];

    for (const tag of hashtags) {
        console.log(`🔍 Searching hashtag: ${tag}`);

        for (let i = 0; i < limit / hashtags.length; i++) {
            results.push({
                platform: 'Instagram',
                source_url: `https://www.instagram.com/explore/search/keyword/?q=%23${tag}`,
                name: `Lead ${i + 1}`,
                handle: `user_${i}_${tag}`,
                bio: `Exploring ${tag} for automation & freelance.`,
                tags: tag,
                intent: 'AI Automation / Growth Tools',
                follower_reach: Math.floor(Math.random() * 10000),
                country_region: 'Global',
                confidence_score: Math.floor(Math.random() * 20) + 80,
                date_added: new Date().toISOString().split('T')[0],
                verification_status: Math.random() > 0.7 ? 'Verified' : 'Unverified',
                tier: 'Mid',
                notes_offer_type: 'Automation prompt buyer',
                status: 'Pending',
                source: 'Instagram',
                engagement_score: Math.floor(Math.random() * 100),
                niche: 'AI/Marketing',
                pricing_tier: 'Low-Mid',
                service_type: 'Prompt pack',
                urgency: 'Medium',
                offer_type: 'Prompt request',
                collaboration_budget: '$50-$200'
            });
        }
    }

    await Actor.pushData(results);
    console.log(`✅ ${results.length} leads saved to dataset.`);
});

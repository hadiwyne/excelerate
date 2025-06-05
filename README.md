# My Data Visualization Project
Data-Driven Insights into Ad Campaign Performance: A Collaborative Internship Project Analzying Engagement, Reach, and Cost-Efficiency to Optimize GlobalShala’s Marketing Strategy.

# Introduction: 

As part of our internship project with GlobalShala, I, [Abdul Hadi](https://www.linkedin.com/in/khabdulhadis/), served as a team-lead with two other team members: [Derrick Nyarko](https://www.linkedin.com/in/derrick-nyarko-a01814104/) and [Fahmida Salma](https://www.linkedin.com/in/fahmida-salma-648282253/). We were tasked with analyzing the performance of 11 Facebook ad campaigns targeting two primary audiences: **“students”** and **“educators and principals.”** In the **first** week of the project, we focused on identifying underperforming campaigns based on key performance indicators such as Cost Per Click (CPC), Click-Through Rate (CTR), Unique Link Clicks (ULC), and an Efficiency Score (ULC/Amount Spent). Our objective was to recommend one campaign for removal to improve overall budget efficiency. Using R, Tableau, and Power BI, we created visualizations such as bar charts, scatter plots, heatmaps, and pie charts, to support our insights. This phase laid the groundwork for optimizing marketing spend by reallocating budget toward higher-performing campaigns.

## Dataset Overview

The dataset used in this project was exported from Facebook and contains detailed performance metrics for **11 ad campaigns**. Each row represents a unique campaign segment with several performance indicators that guided our analysis. Below is a description of the columns included in the dataset:

| Column Name            | Description |
|------------------------|-------------|
| **Campaign Name**      | The name of the Facebook ad campaign. |
| **Audience**           | The target audience of the ad (e.g., "students" or "educators and principals"). |
| **Age**                | The age group targeted by the ad campaign. |
| **Reach**              | The number of unique users who saw the campaign at least once. |
| **Impressions**        | The total number of times the campaign was displayed (including repeat views). |
| **Clicks**             | The total number of clicks on the ad (may include multiple clicks from the same user). |
| **Unique Clicks**      | The number of unique users who clicked on the ad. |
| **Unique Link Clicks (ULC)** | The number of distinct users who clicked on a link within the ad, providing a clearer indicator of genuine interest. |
| **Click-Through Rate (CTR)** | The percentage of impressions that resulted in clicks. |
| **Unique Click-Through Rate (UCTR)** | The percentage of unique users who saw the ad and clicked on the link (minimizes the bias from repeat clicks). |
| **Frequency**          | The average number of times a user saw the ad. |
| **Amount Spent**       | The total cost incurred for running the campaign. |
| **Cost Per Click (CPC)** | Indicates how much was spent for each click on the ad. |
| **Cost Per Result (CPR)** | Indicates the cost per meaningful interaction or conversion. |

These columns were the foundation for our evaluation of campaign effectiveness. We used data extracted from these columns to identify weak performers and support data-driven marketing decisions.

## Bar Chart Analysis: Insights from Audience and Campaign Metrics

Our dataset categorizes audience age into groups, with specific ad campaigns tailored to each. This allows us to explore how different age brackets respond to campaigns, particularly by measuring **Click-Through Rate (CTR)**.

### CTR by Age Group

Using *Age Range* on the X-axis and *CTR* on the Y-axis, we generated the following bar chart:

![CTR Bar Chart](/assets/img/fig_1.png)

The chart shows that the **18–24 age group** have the highest engagement. This is expected, as social media usage is highest among late teens and young adults. However, when we compare this with **reach across age groups**, the picture shifts.

### Age Group vs. Reach

![Age Reach Bar Chart](/assets/img/fig_2.png)

Although the **25–34 age group** has significantly lower reach than 18–24, it shows **comparable CTR**, which indicates strong engagement from a smaller audience segment. To investigate more, we examined campaign-level performance.

### Amount Spent per Campaign

![Amount Spent on Campaign Bar Chart](/assets/img/fig_3.png)

This bar chart shows that the **Educators and Principals** campaign incurred the highest cost, while the **Ghana Students** campaign was the most budget-friendly.

### Campaign Reach Comparison

![Reach of Campaign Bar Chart](/assets/img/fig_4.png)

Surprisingly, the Educators and Principals campaign ranks **fourth in reach**, despite being the most expensive. On the other hand, the **low-cost Ghana campaign** ranks **sixth in reach**, which makes it more cost-efficient in terms of visibility.

### CPC by Country

![Geography CPC Bar Chart](/assets/img/fig_5.png)

Countries like **Nigeria** and **India** show lower **Cost Per Click (CPC)**, yet India also has a high reach, making it both efficient and expansive. But reach alone isn't the final metric of success.

### uCTR by Country

![Geography UCTR Bar Chart](/assets/img/fig_6.png)

Interestingly, **Nigeria**, despite a modest reach of 21,929, records the **highest Unique Click-Through Rate (uCTR) at 9.4%**. This suggests that Nigerian audiences were the most engaged, which offers a pretty valuable insight for future ad targeting and budget reallocation.

## Scatter & Bubble Plot Analysis: Visibility vs. Engagement

To better understand the visibility and engagement levels of each campaign, we used a **bubble plot** with the following dimensions:

- **X-axis**: Reach: the number of unique users who saw the campaign.
- **Y-axis**: Impressions: the total number of times the ad was shown.
- **Bubble Size**: Unique Link Clicks (ULC): the number of individuals who clicked on the ad.
- **Color**: Represents each campaign.

![Impression Reach Plot](/assets/img/fig_7.png)

### Interpreting the Plot

Campaigns positioned in the **top-right corner** have both high reach and high impressions, which show **strong visibility**. Notably:

- **SHU_3 (Students Apart from India and US)** and **SHU_Students (Nepal)** stand out for their **high reach, high impressions, and large bubble sizes**. This means that these campaigns have strong visibility and high engagement.
- The **SHU_3** campaign, in particular, has one of the **largest bubbles**, which means that this campaign has a high number of unique link clicks.
- **Canada** and **USA** campaigns show **small bubbles**, because they have weak engagement despite modest reach.

### Low-Performing Campaigns

Campaigns in the **bottom-left corner** are clear underperformers. These have:

- **Low reach**
- **Low impressions**
- **Small bubble sizes**, meaning minimal engagement

Such campaigns include:

- **SHU_Students (UAE)**
- **SHU_Students (USA)**
- **SHU_Students (Canada)**

The **UK campaign** is barely visible due to its **extremely low reach**, because it has a negligible impact.

## Heatmap Analysis: Reach by Campaign and Age Group

To understand how different age groups responded to each campaign, we created a heatmap showing **Reach** across campaigns and age ranges.

![Campaign Age Range Heatmap](/assets/img/fig_8.png)

### Key Insights:

- The **18–24 age group** consistently shows the **strongest performance** across nearly all campaigns.
- This trend is **most prominent** in the **SHU_Students (India)** campaign, which achieved a reach of **30,110** in this age group.
- The **SHU_3 (Students Apart from India and US)** campaign follows closely as the **second-strongest performer**.

### Underperformance in Older Age Groups:

- Lighter shades across the **35–64 age range** mean **lower reach and engagement** among older demographics.
- A notable exception is **SHU_6 (Educators and Principals)**, which reached **8,761 users aged 35–44**. This is because this campaign was targeted towards an older audience.

### Low-Performing Campaigns:

- Campaigns such as **SHU_Students (UK)**, **SHU_Students (Canada)**, and **SHU_Students (Australia)** show **consistently low reach** across **all age groups**, which show their consistent weak performance and limited audience impact.

## Pie Chart Analysis: Audience Reach by Age and Geography

To get a clearer picture of how reach is distributed, we used pie charts to break down the data by **age group** and **geographic region**.

### Reach by Age Group

![Age Group Pie Chart](/assets/img/fig_9.png)

The chart clearly shows that the **18–24 age group** accounts for the **largest share of ad reach**, which confirms our earlier conclusion that younger audiences are more likely to view and engage with the campaigns.

### Reach by Geographic Group

![Geography Pie Chart](/assets/img/fig_10.png)

- **Group 1** *(Australia, Canada, United Kingdom, Ghana, Nigeria, Pakistan, United States)* recorded the **highest reach**, contributing to **24.6%** of the total.
- **India** followed closely, accounting for **16.9%** of overall campaign reach.

## Stacked Bar Chart Analysis: CTR & uCTR by Campaign, Age, and Geography

### CTR by Age Group within Campaigns

To analyze how **Click-Through Rate (CTR)** is distributed across age groups within each campaign, we used a stacked bar chart.

![CTR Stacked Bar Chart](/assets/img/fig_11.png)

**Key observations:**

- **SHU_Students (Nigeria)** leads with the **highest CTR**, driven mainly by the **18–24** and **25–34** age groups.
- **SHU_Students (USA)** follows closely, also heavily skewed toward the younger demographic.
- **SHU_3 (Students Apart from India and US)** ranks third with a **17.8% CTR**, again dominated by younger age groups.
- **SHU_6 (Educators and Principals)** stands out as the only campaign with significant CTR contributions from **older age brackets** (35–64), which aligns with its target audience.

Other campaigns like **Ghana**, **UK**, **UAE**, **India**, and **Nepal** show **very low CTRs**, which show that they are underperforming and need strategic adjustments.

### Audience Age Impact

The **color distributions** in this chart clearly show that **younger age groups (13–34)** are the primary contributors to CTR across student-focused campaigns. But the **educator campaign** is better segmented, and has successfully reaching older age groups.

These trends help determine which segments to **expand or optimize** based on GlobalShala’s goals.

---

### CTR by Geography & Campaign

We also compared **CTR across different countries and regions**, broken down by campaign.

![CTR Geo Campaign Stacked Bar Chart](/assets/img/fig_12.png)

**Findings:**

- **Nigeria** has the **highest CTR** among all geographies.
- **USA** and **Group 2** *(Australia, Canada, United Kingdom, Ghana, Niger, Nigeria, Nepal, Pakistan, Thailand, Taiwan)* follow with **CTR values of 6.1% and 5.6%** respectively.
- **Canada, India, Australia, Ghana, and the UK** maintain moderate CTRs between **3–4%**.
- **UAE, Group 1** *(Australia, Canada, United Kingdom, Ghana, Nigeria, Pakistan, United States)*, and **Nepal** show **lower CTRs**, ranging from **2.2–2.8%**.

This means that **Nigeria and USA are the most efficient regions** in terms of engagement, and **UAE and Nepal may need campaign redesigns or strategy shifts**.

---

### uCTR (Unique Click-Through Rate) by Campaign

Finally, we evaluated campaign performance using **uCTR**, calculated as:

> uCTR = (Unique Clicks / Reach) × 100


This gives us a more accurate picture of how much of the targeted audience actually engaged with the campaign.

![UCTR Campaign Stacked Bar Chart](/assets/img/fig_13.png)

**Insight:**

- **SHU_Students (UAE)** has the **lowest uCTR**, which shows **poor audience engagement** despite whatever reach it might have achieved.
- Campaigns with **high uCTR** are more effective, as they generate interest from a larger proportion of their audience.

## Analyzing Metrics to Suggest Dropping a Campaign

To make a data-driven recommendation for which campaign to drop, we focused on key performance metrics—**Cost Per Click (CPC)** and the **relationship between Amount Spent and Unique Link Clicks (ULC)**. These together highlight cost-efficiency and engagement effectiveness.

---

### Cost Per Click (CPC)

![CPC Bar Chart](/assets/img/fig_14.png)

**CPC (Cost Per Click)** measures how much each click on an ad costs, calculated by dividing the **total spend by the number of clicks** received:

> CPC = Amount Spent / Total Clicks


- **Lower CPC** indicates more cost-effective campaigns—more clicks for less money.
- **Higher CPC** suggests inefficient spending and possible underperformance.

By evaluating CPC across campaigns, we can quickly spot which ones are **consuming budget without delivering proportional engagement**.

---

### High Spend, Low Engagement = Inefficiency

![ULC Plot](/assets/img/fig_15.png)

Another metric we analyzed was the ratio of **Amount Spent vs. Unique Link Clicks (ULC)**, which reflects the true **cost-efficiency** of each campaign.

- **SHU_6 (Educators and Principals)** stands out as a **high-budget campaign with comparatively low ULC**, which means **poor ROI** and inefficient audience engagement.
- On the other hand, campaigns that maintain **moderate spending and higher ULC**, like SHU_3 (Students outside India & US), show **better performance and greater cost-effectiveness**.

---

## Campaign to Drop

Based on the key performance metrics we’ve analyzed—including **Click-Through Rate (CTR)**, **Cost Per Click (CPC)**, and **Unique Link Clicks (ULC)**—we can now make a data-backed recommendation for the **campaign that should be dropped**.

---

### CTR vs Reach

![CTR Vs Reach Plot](/assets/img/fig_16.png)

From this chart, we can see that **SHU_Students (Nepal)** has one of the **lowest CTRs** among all campaigns—**despite having a comparatively high reach**. This means poor engagement: many people saw the ad, but very few interacted with it.

---

### CPC vs CTR

![CTR Vs CPC](/assets/img/fig_17.png)

This chart offers a clearer view of **efficiency**:

- **Top Performers**:  
  - **SHU_Students (Nigeria)** and **SHU3_ (Students Apart from India and US)** have **high CTR** and **low CPC (~1 INR)**.  
  - These are both **cost-effective and highly engaging campaigns**, which makes them ideal for continued investment.

- **Poor Performers**:  
  - **SHU_Students (Australia)** and **SHU_Students (UK)** show **low-to-moderate CTR** paired with **very high CPC**, which means that these campaigns are **expensive with weak returns**.
  - **SHU_Students (Nepal)** also falls into this underperforming group, as it combines **low CTR** with a **moderate to high spend**.

---

## Conclusion

After a detailed performance evaluation of all 11 Facebook ad campaigns, we **recommend discontinuing the SHU_Students (Australia)** campaign because of its **inefficiency and high cost**.

---

### Why Drop Australia?

#### Supporting Evidence

- **Highest Cost Per Click (CPC)**:
  - **$7.15**, which is:
    - **213%** higher than the average CPC of **$2.28**
    - Over **21x more** than the CPC for the best-performing Nigeria campaign (**$0.34**)

- **Low Engagement**:
  - **CTR** is just **3.3%**, well below the **4.2% campaign average**
  - Despite a reach of **14,492**, the **conversion metrics are not impressive**

- **Budget Drain**:
  - Total spend: **$850**
  - Accounts for **7% of the total marketing budget**

- **Financial Impact**:
  - Removing this campaign would:
    - Save **$850** immediately
    - **Boost overall efficiency by ~18%**
    - Allow reallocation to **high-performing campaigns** with better ROI

---

### Campaign We Suggest For Optimization

- **SHU_Students (UK)**:
  - **CPC**: $7.08
  - **CTR**: 3.0%
  - Slightly better than Australia, but still **not cost-effective**
  - Should undergo **optimization or A/B testing** before further investment

---

### Top-Performing Campaigns (To Retain and Expand)

- **SHU_Students (Nigeria)**:
  - **CTR**: 9.5%
  - **CPC**: $0.34
  - **Most efficient and engaging** campaign overall

- **SHU3_ (Students Apart from India and US)**:
  - **CTR**: 5.6%
  - **CPC**: $0.42
  - Strong balance of **high engagement and low cost**

- **SHU_Students (USA)**:
  - **CTR**: 6.1%
  - **CPC**: $5.04
  - While more expensive, it maintains **good engagement** levels

---

### Final Note

By **dropping underperforming campaigns** like Australia, and **focusing resources on high-impact regions** such as Nigeria and SHU3_, the marketing team can achieve **better results with lower cost**, enhancing both reach and ROI. In the second week, we will justify this decision by further investigation.

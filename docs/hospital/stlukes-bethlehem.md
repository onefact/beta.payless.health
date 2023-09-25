<script setup>
  import { reset } from '@uwdata/vgplot';
  reset();
</script>

# St Luke's (Bethlehem)

This demo shows an interactive dashboard of all hospital prices listed at St Luke's (Bethlehem) in PA. The red line is on the diagonal (`y = x`). The points represent the minimum and maximum charges for each procedure, medication, or treatment.

If the price was the same for all patients, the points would be on the diagonal:

<!-- <Example spec="/specs/yaml/stlukes-bethlehem-histogram.yaml" /> -->

<Example spec="/specs/yaml/stlukes-bethlehem.yaml" />

[Code on GitHub](https://colab.research.google.com/github/onefact/data_build_tool_payless.health/blob/main/notebooks/230824-st-lukes-bethlehem.ipynb) | [Visualization code](https://github.com/onefact/payless.health/blob/main/docs/public/specs/yaml/stlukes-bethlehem.yaml) | [Data Source](https://www.slhn.org/billpay/patient-billing/standard-charges-for-services-provided) | [Direct download](https://www.slhn.org/-/media/slhn/Billpay/File/PDF/Standard-Charges/231352213_StLukesHospitalBethlehemCampus_standardcharges.ashx)


The input menus and searchbox filter can help you see where there is the most discrepancy between the minimum and maximum charge. This discrepancy is what we help market makers such as large employers aim to reduce, which is a potential key performance indicator for our goal of reducing the price of health care. 

St Luke's (Bethlehem Campus) charges are pulled from here into our database: 

https://www.slhn.org/billpay/patient-billing/standard-charges-for-services-provided 

(Direct download link [here](https://www.slhn.org/-/media/slhn/Billpay/File/PDF/Standard-Charges/231352213_StLukesHospitalBethlehemCampus_standardcharges.ashx))

This is an initial prototype demonstrating the technical infrastructure that powers Payless Health, a project in development by the One Fact Foundation, a 501(c)(3) non-profit aiming to reduce the price of health care by building open source AI. 

## How this can help reduce the price of health care

We can help train your team to work with the 4,000+ [hospital price sheets we have collected](https://data.payless.health/#hospital_price_transparency/), for example to analyze health care claim feeds and identify opportunities to improve health outcomes while reducing the cost of care. 

Some of the folks we are lucky to work with have already saved $5-10 million dollars through such analyses, and we'd love to help you do the same. The process usually consists of standardizing a claim feed, linking it to our data, and then using our tools to identify opportunities to reduce the cost of care while improving health outcomes. For example, some folks we work with create incentives for employees such as ride-sharing credits to enable employees to access care at lower cost facilities that are cheaper and higher-quality for procedures that can be planned, such as certain elective surgeries.

## Feedback and collaboration! 

If you have any feedback, want to help build this, or suppport us with a tax-deductible contribution, please join our [chat](https://onefact.zulipchat.com/) or send us an email at [hello@payless.health](mailto:hello@payless.health) :)

We need all the help we can get to reduce the price of health care, and it can start from one fact, such as any one discrepancy between these maximum and minimum negotiated rates published by Mount Sinai. This demo builds on our first campaign in New York City highlighting the disparity in C section prices: https://www.onefact.org/images/five-boro-bike-tour/payless.health-linknyc-campaign.jpg
{
  currency: "$",
  accountName: "John Doe",
  accountNumber: 1234567890,
  data: "April 5th 2021", // If it is not convenient to send the data into that format please send me however it is convenient for you

  auditScore: {
    overallScore: {
      
      score: 76, // the overall score, which will be displayed on the bigger bar
      
      performanceAudit: {
        first: 70, // that will be the percentage displayed on the heading
      }, // for every sub section of the overall score, please send all of the corresponding percentages in an array
      
      qualityScoreAudit: {
        first: 30,
        sub: [30, 70, 70],
        
        accountStructureAudit: {
          first: 50,
          sub: [40, 50, 60, 50, 40, 30]
        }
      },
      keyFindings: {
        first: {
          lost: 34,
          potentialGains: [654, 108, 12000]
        },
        issues: {
          failedAreas: 11,
          totalAreas: 35,
        },
      },
      accountSize: {
        campaigns: {
          searchCampaigns: 5,
          shoppingCampaigns: 5,
          displayCampaigns: 1,
          otherCampaigns: 0
        },
        ads: {
          textAds: 5,
          responsiveAds: 5,
          responsiveDisplayAds: 5,
          dsaAds: 2,
          imageAds: 1,
          otherAds: 3,
        },
        keywords: {
          searchKeywords: 5
        }
      },
      performance: {
        clicks: 8972000,
        ctr: 10.3,
        impr: 280000,
        cost: 23600,
        conv: 309000,
        convRate: 99.8,
        costPerConv: 158000,
        convValue: 838000
      }
    },
  //####################################################################################
    performanceAudit: {
      searchTraffic: {
        missed: { // this is the data displayed on the chart
          biddingAndQuality: 20,
          budgetLimitations: 10,
          acquired: 65
        },
        tableData: { // the data displayed on the table
          impressions: [12345, 3986, 1342],
          clicks: [389, 87, 23],
          conversions: [34, 4, 1],
          conversionsValue: [500, 57, 4],
        },
      },
      conversions: {
        keywords: 10,
        segments: 1,
        campaigns: 2,
        accountScore: 5
      },
      wastedSpend: {
        landingPages: {
          sum: 3400,
          num: 2
        },
        keywords: {
          sum: 874,
          num: 5
        },
        searchTerms: {
          sum: 2100,
          num: 8
        },
        automaticPlacements: {
          sum: 4500,
          num: 3
        }
      },
      boostPerformance: {
        ads: {
          numberAds: [300, 50, 5000], // numbers with arrow icon
          underpefromingAds: 10
        },
        networkSettings: {
          campaigns: 10,
          money: [3, 8]
        }, // the data for the corresponding sections of boostPerformance
        userLocation: {
          campaigns: 10,
          money: [3, 8]
        }
      }
    },
  //####################################################################################
    qualityScoreAudit: {
      qualityScore: 5,
      // As stated in the report these will be enums corresponding to 1 (below average), 2(average) and 3 (above average)
      ctr: 1,
      adRelevance: 2,
      pageExperience: 3,
      keywordQualityScoreDist: {
        number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // 10 figures for the charts
        spend: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // 10 figures for the charts
      }
    },
  //####################################################################################
    accountStructureAudit: {
      // the key of each object is the title of the corresponding section
      accountSettings: {
        conversionTracking: 1
      }
      campaignSettings: {
        searchDisplay: 3,
        brandImage: 0,
        cpc: 2,
        budgets: 4
      },
      keywords: {
        stopped: 1,
        formatProblems: 2,
        duplicate: 0,
        disapproved: 2,
        relevancyIssues: 4,
        activeAdGroups: 2,
        terms: 2,
        new: 2
      },
      negativeKeywords: {
        negativeKeyw: 2,
        refactored: 3,
        unused: 2
      },
      landingPages: {
        brokenUrls: 2,
        httpCount: 0,
        httpRedirect: 4
      },
      ads: {
        duplicate: 2,
        inactive: 0,
        abTested: 2,
        optimumNum: 3,
        outdated: 2,
        availableSpaceUsed: 2,
        rsa: 1,
        hqAds: 2,
        eligibleTests: 2,
        activeImageTests: 0,
      },
      adExtensions: {
        siteLink: 0,
        callout: 2,
        structuredSnipped: 1,
        enough: 3,
        calloutExtension: 3,
        structuredSnippedExtension: 2,
      },
    },
  //####################################################################################
    accountInsights: {
      searchDisplayPerformace: {
        searchPerformance: {
          clicks: 126,
          impr: 13254,
          ctr: 0.95,
          avgCpc: 1.43,
          cost: 180.66,
          conv: 2.72,
          convRate: 2.18,
          costConv: 65.86,
          convValue: 3047.58,
          convValueCost: 16
        },
        displayPerformance: {
          clicks: 126,
          impr: 13254,
          ctr: 0.95,
          avgCpc: 1.43,
          cost: 180.66,
          conv: 2.72,
          convRate: 2.18,
          costConv: 65.86,
          convValue: 3047.58,
          convValueCost: 16
        }
      },
      searchImpressionsPosition: {
        firstPosition: 53,
        aboveOrganicListing: 35,
        belowOrganicListing: 12
      },
      costConvAnalysis: {
        keywordCount: {
          withConversion: 5123,
          withoutConversion: 10864
        },
        keywordSpend: {
          withConversion: 1512,
          withoutConversion: 9847
        }
      },
      activeKeywordMatchDist: {
        exact: {
          keywords: 1234,
          keywordsPercent: 38,
          clicks: 3630,
          impr: 47502,
          ctr: 7.64,
          avgCpc: 0.39,
          cost: 1423,
          conv: 360,
          costConv: 3.97,
          convRate: 9.94,
          convValue: 4697,
          convValueCost: 15
        },
        phrase: {
          keywords: 1234,
          keywordsPercent: 38,
          clicks: 3630,
          impr: 47502,
          ctr: 7.64,
          avgCpc: 0.39,
          cost: 1423,
          conv: 360,
          costConv: 3.97,
          convRate: 9.94,
          convValue: 4697,
          convValueCost: 15
        },
        broad: {
          keywords: 1234,
          keywordsPercent: 38,
          clicks: 3630,
          impr: 47502,
          ctr: 7.64,
          avgCpc: 0.39,
          cost: 1423,
          conv: 360,
          costConv: 3.97,
          convRate: 9.94,
          convValue: 4697,
          convValueCost: 15
        },
        broadPlus: {
          keywords: 1234,
          keywordsPercent: 38,
          clicks: 3630,
          impr: 47502,
          ctr: 7.64,
          avgCpc: 0.39,
          cost: 1423,
          conv: 360,
          costConv: 3.97,
          convRate: 9.94,
          convValue: 4697,
          convValueCost: 15
        }
      },
      negativeKeywordsDist: {
        campaignsUsingNegativeKeyw: {
          // plot data
          notUsing: 5,
          using: 2,
          // bar values
          adGroup: 4,
          campaignLevelNegatives: 5,
          negativeKeywLists: 6
        },
        campaignNegatives: {
          broad: 7,
          phrase: 2,
          exact: 584
        },
        adGroupNegatives: {
          broad: 7,
          phrase: 2,
          exact: 584
        },
        listNegatives: {
          broad: 7,
          phrase: 2,
          exact: 584
        }
      },
      adExtensionsBreakdown: {
        // Question from the report: How do we tell you which number is which?
        // by setting the data to the corresponding key, that way I will be able to 
        // distinguish the numbers
        chartMoneyData: {
          siteLinks: {
            withExtensions: 56123,
            withoutExtensions: 216801
          },
          callExt: {
            withExtensions: 56123,
            withoutExtensions: 216801
          },
          calloutExt: {
            withExtensions: 56123,
            withoutExtensions: 216801
          },
          locationExt: {
            withExtensions: 56123,
            withoutExtensions: 216801
          },
          promotionExt: {
            withExtensions: 56123,
            withoutExtensions: 216801
          },
          structuredSnipped: {
            withExtensions: 56123,
            withoutExtensions: 216801
          }
        },
        enabledCampaignsWith: {
          siteLink: 0,
          callExt: 0,
          calloutExt: 0,
          locationExt: 0,
          promotionEx: 0,
          structuredSnipped: 0,
        },
        enabledCampaignsWithout: {
          siteLink: 0,
          callExt: 0,
          calloutExt: 0,
          locationExt: 0,
          promotionEx: 0,
          structuredSnipped: 0,
        }
      },
      campaignUsageBidAdj: {
        invalidAdjustments: 12,
        desktop: 2,
        mobile: 3,
        tablet: 0,
        targetLocation: 5,
        adSchedule: 1,
        audience: 9,
        age: 1,
        gender: 0,
        parental: 1
      },
      adTestingCoverage: {
        numberAds: {
          tested: 835,
          notTested: 165
        },
        adsSpend: {
          tested: 750,
          notTested: 250
        }
      },
      // Responsive Search Ads
      rsa: {
        percentageOfAdGroups: {
          clicks: 50,
          convRate: 50,
          ctr: 10,
          cpc: 0
        },
        distributionOfRsa: {
          poor: 50,
          average: 10,
          good: 50,
          excellent: 0
        }
      },
  //####################################################################################
      segmentsPerforamnce: {
        devices: {
          clicks: [40, 50, 60],
          impr: [40, 50, 60],
          ctr: [40, 50, 60],
          avgCpc: [40, 50, 60],
          cost: [40, 50, 60],
          conv: [40, 50, 60],
          convRate: [40, 50, 60],
          costConv: [40, 50, 60],
          convVal: [40, 50, 60],
          convValCost: [40, 50, 60],
          valConv: [40, 50, 60]
        },
        userLocation: {
          clicks: [40, 50],
          impr: [40, 50],
          ctr: [40, 50],
          avgCpc: [40, 50],
          cost: [40, 50],
          conv: [40, 50],
          convRate: [40, 50],
          costConv: [40, 50],
          convVal: [40, 50],
          convValCost: [40, 50],
          valConv: [40, 50]
        },
        age: {
          clicks: [40, 50, 60, 60, 40, 50, 60, 60],
          impr: [40, 50, 60, 40, 50, 60, 60],
          ctr: [40, 50, 60, 40, 50, 60, 60],
          avgCpc: [40, 50, 60, 40, 50, 60, 60],
          cost: [40, 50, 60, 40, 50, 60, 60],
          conv: [40, 50, 60, 40, 50, 60, 60],
          convRate: [40, 50, 60, 40, 50, 60, 60],
          costConv: [40, 50, 60, 40, 50, 60, 60]
        },
        gender: {
          clicks: [40, 50, 60],
          impr: [40, 50, 60],
          ctr: [40, 50, 60],
          avgCpc: [40, 50, 60],
          cost: [40, 50, 60],
          conv: [40, 50, 60],
          convRate: [40, 50, 60],
          costConv: [40, 50, 60],
          convVal: [40, 50, 60],
          convValCost: [40, 50, 60],
          valConv: [40, 50, 60]
        },
        Parental: {
          clicks: [40, 50, 60],
          impr: [40, 50, 60],
          ctr: [40, 50, 60],
          avgCpc: [40, 50, 60],
          cost: [40, 50, 60],
          conv: [40, 50, 60],
          convRate: [40, 50, 60],
          costConv: [40, 50, 60],
          convVal: [40, 50, 60],
          convValCost: [40, 50, 60],
          valConv: [40, 50, 60]
        }
      }
    }
  }
}
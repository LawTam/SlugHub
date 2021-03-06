import {createStackNavigator} from 'react-navigation';
import { createAppContainer } from 'react-navigation';

// These imports are needed, one for every screen in our app
// TODO: Figure out way to do something like:
// import * from './components/pages/'

// App Skeleton
import { WelcomeScreen } from './components/pages/Skeleton/welcome';
import { HomePageScreen } from './components/pages/Skeleton/homepage';

// Home
import { AdvisingScreen} from './components/pages/Skeleton/advising';
import { EngagementScreen} from './components/pages/Skeleton/engagement';

  // Advising
    // Jack Baskin Engineering Page Imports
      // Majors
    import { JBE_MajorsScreen} from './components/pages/Advising/JackBaskin/jbe_majors';
    import { CS_BSScreen} from './components/pages/Advising/JackBaskin/Majors/cs_bs';
    import { CS_BAScreen} from './components/pages/Advising/JackBaskin/Majors/cs_ba';
    import { CSGD_BSScreen} from './components/pages/Advising/JackBaskin/Majors/csgd_bs';
    import { TIM_BSScreen} from './components/pages/Advising/JackBaskin/Majors/TIM_BS';
    import { EE_BSScreen} from './components/pages/Advising/JackBaskin/Majors/ee_bs';
    import { RE_BSScreen} from './components/pages/Advising/JackBaskin/Majors/robo_bs';
    import { NDT_BAScreen} from './components/pages/Advising/JackBaskin/Majors/ndt_ba';
    import { BE_ATScreen} from './components/pages/Advising/JackBaskin/Majors/BE/be_at_motor';
    import { BE_BiomoleScreen} from './components/pages/Advising/JackBaskin/Majors/BE/biomole';
    import { BE_ElecScreen} from './components/pages/Advising/JackBaskin/Majors/BE/be_bioelectronics';
    import { CE_MajorScreen}   from  './components/pages/Advising/JackBaskin/Majors/ce_major'
    import { BioInfo_MajorScreen}   from  './components/pages/Advising/JackBaskin/Majors/BE/bioinfo_major'
    import { BEScreen} from './components/pages/Advising/JackBaskin/Majors/BE/BE_page';
      // Minors
    import { JBE_MinorsScreen} from './components/pages/Advising/JackBaskin/jbe_minors';
    import { CS_MinorScreen} from './components/pages/Advising/JackBaskin/Minors/cs_minor';
    import { AM_MinorScreen} from './components/pages/Advising/JackBaskin/Minors/am_minor';
    import { Statistics_MinorScreen} from './components/pages/Advising/JackBaskin/Minors/Statistics_Minor';
    import { TIM_MinorScreen} from './components/pages/Advising/JackBaskin/Minors/TIM_Minor';
    import { EE_MinorScreen} from './components/pages/Advising/JackBaskin/Minors/EE_Minor';
    import { CE_MinorScreen } from './components/pages/Advising/JackBaskin/Minors/ce_minor';
    import { BioInfo_MinorScreen } from './components/pages/Advising/JackBaskin/Minors/bioinfo_minor';

  // Engagement
    // Athletics
    import {AthleticsScreen} from './components/pages/Engagement/Athletics/athletics'
    import {Competitive_AthleticsScreen} from './components/pages/Engagement/Athletics/Competitive_Athletics/competitive_athletics'
    import {Recreational_AthleticsScreen} from './components/pages/Engagement/Athletics/Recreational_Athletics/recreational_athletics'
    import {Intramural_AthleticsScreen} from './components/pages/Engagement/Athletics/Intramural_Athletics/intramural_athletics'
    // Clubs
    import {ClubsScreen} from './components/pages/Engagement/Clubs/clubs'
    import {AcademicClubsScreen} from './components/pages/Engagement/Clubs/Academic_Clubs/academic_clubs'
    import {Cultural_ClubsScreen} from './components/pages/Engagement/Clubs/Cultural_Clubs/cultural_clubs'
    import {Environmental_ClubsScreen} from './components/pages/Engagement/Clubs/Environmental_Clubs/environmental_clubs'
    import { General_InterestClubsScreen } from './components/pages/Engagement/Clubs/General_Interest_Clubs/general_interest_clubs';
    import {Performing_Arts_ClubsScreen} from './components/pages/Engagement/Clubs/Performing_Arts_Clubs/performing_arts_clubs';
    import { Political_ClubsScreen } from './components/pages/Engagement/Clubs/Political_Clubs/political_clubs';
    import { Professional_ClubsScreen } from './components/pages/Engagement/Clubs/Professional_Clubs/professional_clubs';
    import { Religious_ClubsScreen } from './components/pages/Engagement/Clubs/Religous_Clubs/religious_clubs';
    import { Service_ClubsScreen } from './components/pages/Engagement/Clubs/Service_Clubs/service_clubs';
    import { Student_Media_ClubsScreen } from './components/pages/Engagement/Clubs/Student_Media_Clubs/student_media_clubs';
    //facilities
    import {FacilityScreen} from './components/pages/Facilities/facility'
    import {DiningScreen} from './components/pages/Facilities/Dining/dining'
    import {Dining_HallsScreen} from './components/pages/Facilities/Dining/dining_halls'
    import {CafesScreen} from './components/pages/Facilities/Dining/cafes'

  // GLO
  import { gloMainScreen} from './components/pages/Engagement/GLO/gloMain';
  import { culturalScreen} from './components/pages/Engagement/GLO/Cultural';
  import { professionalScreen} from './components/pages/Engagement/GLO/Professional';
  import { lgbtqScreen} from './components/pages/Engagement/GLO/lgbtq';
  import { socialScreen} from './components/pages/Engagement/GLO/Social';
  import { serviceScreen} from './components/pages/Engagement/GLO/Service';


  import {StudyGroupScreen} from './components/pages/Engagement/Study_Groups/studyGroup_page';

// Every screen we have in our program must be in this stack,
// following this format
const FunStack = createStackNavigator({
  // Skeleton
  Welcome: {screen: WelcomeScreen},
  HomePage: {screen: HomePageScreen},
  Advising: {screen: AdvisingScreen},
  Engagement: {screen: EngagementScreen},


    // JackBaskin Engineering Pages
    JBE_Majors: {screen: JBE_MajorsScreen},
    JBE_Minors: {screen: JBE_MinorsScreen},
      // Majors
    CS_BS: {screen: CS_BSScreen},
    TIM_BS: {screen: TIM_BSScreen},
    EE_BS: {screen: EE_BSScreen},
    RE_BS: {screen: RE_BSScreen},
    NDT_BA: {screen: NDT_BAScreen},
    CS_BA: {screen: CS_BAScreen},
    CSGD_BS: {screen: CSGD_BSScreen},
    BE_Elec: {screen: BE_ElecScreen},
    BE_AT: {screen: BE_ATScreen},
    BE_Biomole: {screen: BE_BiomoleScreen},
    CE_Major: {screen: CE_MajorScreen},
    BioInfo_Major: {screen: BioInfo_MajorScreen},
    BE_page: {screen: BEScreen},
      // Minors
    CS_Minor: {screen: CS_MinorScreen},
    AM_Minor: {screen: AM_MinorScreen},
    Statistics_Minor: {screen: Statistics_MinorScreen},
    TIM_Minor: {screen: TIM_MinorScreen},
    EE_Minor: {screen: EE_MinorScreen},
    CE_Minor: {screen: CE_MinorScreen},
    BioInfo_Minor: {screen: BioInfo_MinorScreen},

    // Engagement
    Study_G: {screen: StudyGroupScreen},

    // Advising
      // JackBaskin Engineering Pages
      JBE_Majors: {screen: JBE_MajorsScreen},
      JBE_Minors: {screen: JBE_MinorsScreen},
        // Majors
      CS_BS: {screen: CS_BSScreen},
      TIM_BS: {screen: TIM_BSScreen},
      EE_BS: {screen: EE_BSScreen},
      RE_BS: {screen: RE_BSScreen},
      NDT_BA: {screen: NDT_BAScreen},
      CS_BA: {screen: CS_BAScreen},
      CSGD_BS: {screen: CSGD_BSScreen},
      BE_Elec: {screen: BE_ElecScreen},
      BE_AT: {screen: BE_ATScreen},
      BE_Biomole: {screen: BE_BiomoleScreen},
      CE_Major: {screen: CE_MajorScreen},
      BioInfo_Major: {screen: BioInfo_MajorScreen},
      BE_page: {screen: BEScreen},
        // Minors
      CS_Minor: {screen: CS_MinorScreen},
      AM_Minor: {screen: AM_MinorScreen},
      Statistics_Minor: {screen: Statistics_MinorScreen},
      TIM_Minor: {screen: TIM_MinorScreen},
      EE_Minor: {screen: EE_MinorScreen},
      CE_Minor: {screen: CE_MinorScreen},
      BioInfo_Minor: {screen: BioInfo_MinorScreen},

    // Engagement
      // Athletics
      Athletics: {screen: AthleticsScreen},
      Competitive_Athletics: {screen: Competitive_AthleticsScreen},
      Recreational_Athletics: {screen: Recreational_AthleticsScreen},
      Intramural_Athletics: {screen: Intramural_AthleticsScreen},
      // Clubs
      Clubs: {screen: ClubsScreen},
      AcademicClubs: {screen: AcademicClubsScreen},
      Cultural_Clubs: {screen: Cultural_ClubsScreen},
      Environmental_Clubs: {screen: Environmental_ClubsScreen},
      General_InterestClubs: {screen: General_InterestClubsScreen},
      Performing_Arts_Clubs: {screen: Performing_Arts_ClubsScreen},
      Political_Clubs: {screen: Political_ClubsScreen},
      Professional_Clubs: {screen: Professional_ClubsScreen},
      Religous_Clubs: {screen: Religious_ClubsScreen},
      Service_Clubs: {screen: Service_ClubsScreen},
      Student_Media_Clubs: {screen: Student_Media_ClubsScreen},
      //facility
      Facility: {screen: FacilityScreen},
      Dining: {screen: DiningScreen},
      Dining_Halls: {screen: Dining_HallsScreen},
      Cafes: {screen: CafesScreen},
      // GLO
      gloMain: {screen: gloMainScreen},
      cultural_page: {screen: culturalScreen},
      professional_page: {screen: professionalScreen},
      lgbtq_page: {screen: lgbtqScreen},
      social_page: {screen: socialScreen},
      service_page: {screen: serviceScreen},


});

const App = createAppContainer(FunStack);

export default App;

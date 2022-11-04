import {Layout} from '../components/Layout';
import {AboutPage} from '../components/AboutPage';
import {GetStaticProps} from 'next';
import {getSkillGroupsData} from '../../lib/skillGroups';

export interface SkillGroup {
    id: string;
    title: string;
    skills: string[];
}

interface AboutProps {
    skillGroups: SkillGroup[];
}

export default function About({skillGroups}: AboutProps) {
    return (
        <Layout headerText="About me_">
            <AboutPage skillGroups={skillGroups}/>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const skillGroups = getSkillGroupsData();

    return {
        props: {
            skillGroups,
        },
    };
};

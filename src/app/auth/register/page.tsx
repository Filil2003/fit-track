import { Button } from '@/src/components/Button';
import { Input } from '@/src/components/Input';
import Link from 'next/link';
import cssClasses from './page.module.css';

export default function RegisterPage() {
  return (
    <>
      <aside className={cssClasses.poster}>
        <h2> FitTrack helps you monitor your workout progress.</h2>
        <p>Track, analyze, and optimize your fitness goals with ease.</p>
      </aside>
      <section className={cssClasses.section}>
        <header className={cssClasses.section__header}>
          <h1>Start tracking your progress today</h1>
          <p>Stay motivated and reach your fitness milestones faster.</p>
        </header>
        <form className={cssClasses.form}>
          <Input required={true}
                 type="text"
                 label="Your full name"
                 name="fullName"/>
          <Input required={true}
                 type="email"
                 label="Your email address"
                 name="email"/>
          <Input required={true}
                 label="Create a password"
                 type="password"
                 name="password"/>
          <Input required={true}
                 label="Confirm password"
                 type="password"
                 name="confirmPassword"/>
          <Button type="submit" variant="primary">Join now</Button>
          <p>Already have an account?{' '}
            <Link href="/auth/sign-in">Sign in</Link>
          </p>
        </form>
      </section>
    </>
  );
}

import { useEffect } from 'react'
import { Link } from 'react-router'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { MailIcon } from './icons/MailIcon'

interface Properties {
	title: string
}

export function Head({ title }: Properties): React.ReactElement {
	useEffect(() => {
		document.title = title
	}, [title])

	const handleExternalLink = (url: string) => {
		window.open(url, '_blank', 'noopener,noreferrer');
	};

	return (
		<header className="shadow-md bg-[hsl(var(--background))] border border-b-[hsl(var(--border))]">
			<nav className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between">
					<Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
						<p>Julien Cristovao</p>
					</Link>
					<div className="space-x-2">
						<Link
							className="inline-block w-10"
							onClick={() => handleExternalLink('http://www.linkedin.com/in/julien-cristovao-bb7a69209')}
							to="#"
						>
							<LinkedinIcon />
						</Link>
						<a
							href="mailto:julien.cristovao@gmail.com?subject=Contact Portfolio"
							className="inline-block w-10"
							aria-label="Envoyer un email"
						>
							<MailIcon />
						</a>
					</div>
				</div>
			</nav>
		</header>
	)
}

import { Head } from '@/components/Head'
import { Layout } from '@/components/Layout'
import { Me } from '@/components/Me'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'

export function Gallery() {
	return (
		<>
			<Head title='Cristovao - Portfolio' />
			<Layout>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
					<div className="flex justify-center w-full">
						<Me />
					</div>
					<div className="text-center md:text-left space-y-4 mt-4 md:mt-0">
						<h1 className="text-3xl md:text-4xl font-bold">Bonjour 👋</h1>
						<h2 className="text-xl md:text-2xl font-semibold">Je suis Julien Cristovao</h2>
						<p className="text-base md:text-lg">Développeur FullStack</p>
					</div>
				</div>
				<Skills />
				<Projects />
			</Layout>
		</>
	)
}
